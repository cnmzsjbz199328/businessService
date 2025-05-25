import { AnalysisParams, AnalysisResult, GeminiResponse, StructuredAnalysis } from './types';
import { getMockAnalysisResponse } from '../simulation/mockResponses';

// 直接从 process.env 获取环境变量
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
const GEMINI_API_URL = process.env.NEXT_PUBLIC_GEMINI_API_URL || 'https://badtom.dpdns.org/gemini';
const CACHE_EXPIRY_MS = 5000; // 缓存过期时间，可以后续移到环境变量

// 添加请求缓存
const requestCache = new Map<string, Promise<AnalysisResult>>();

/**
 * API client for making requests to the backend
 */
export const apiClient = {
  /**
   * Get analysis results based on parameters
   */
  async getAnalysisResults(params: AnalysisParams): Promise<AnalysisResult> {
    // 创建缓存键
    const cacheKey = `${params.keyword}_${params.startDate}_${params.endDate}_${params.videoCount}_${params.commentCount}`;
    
    // 如果已有相同请求在进行中，返回缓存的Promise
    if (requestCache.has(cacheKey)) {
      console.log('Using cached request for:', params.keyword);
      return requestCache.get(cacheKey)!;
    }
    
    // 添加日志，调试用
    console.log('API request params:', params);
    
    // 创建请求Promise并缓存
    const requestPromise = this._fetchAnalysisData(params);
    requestCache.set(cacheKey, requestPromise);
    
    try {
      // 等待请求完成
      const result = await requestPromise;
      return result;
    } finally {
      // 请求完成后删除缓存，以便下次可以重新请求
      setTimeout(() => {
        requestCache.delete(cacheKey);
      }, CACHE_EXPIRY_MS);
    }
  },
  
  /**
   * 内部方法：获取分析数据
   */
  async _fetchAnalysisData(params: AnalysisParams): Promise<AnalysisResult> {
    // 如果使用模拟数据，直接返回模拟响应
    if (USE_MOCK_DATA) {
      console.log('Using mock data');
      return await getMockAnalysisResponse(
        params.keyword,
        params.startDate,
        params.endDate,
        params.videoCount,
        params.commentCount
      );
    }
    
    try {
      // 请求 Gemini API
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: params.keyword,
          startDate: params.startDate,
          endDate: params.endDate,
          videoCount: params.videoCount || 20,
          commentCount: params.commentCount || 20
        })
      });
      
      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }
      
      const data = await response.json() as GeminiResponse;
      console.log('Gemini API response:', data);
      
      // 处理返回的数据
      return this.processGeminiResponse(params.keyword, params.startDate, params.endDate, data);
      
    } catch (error) {
      console.error('API request failed:', error);
      
      // 出错时回退到模拟数据
      console.log('Falling back to mock data');
      return await getMockAnalysisResponse(
        params.keyword,
        params.startDate,
        params.endDate,
        params.videoCount,
        params.commentCount
      );
    }
  },
  
  /**
   * Process the unified Gemini response
   */
  processGeminiResponse(
    keyword: string, 
    startDate: string, 
    endDate: string, 
    data: GeminiResponse
  ): AnalysisResult {
    // 转换趋势数据
    const trendData = data.analysis.trend.timeline.map((item) => ({
      date: item.date,
      interest: item.values[0].extracted_value
    }));
    
    // 转换情感数据
    const sentimentData = data.analysis.sentiment.chartData.map((item) => ({
      sentiment: item.label.charAt(0).toUpperCase() + item.label.slice(1).replace('_', ' '),
      value: item.value
    }));
    
    // 从推荐文本中提取结构化数据
    const structuredAnalysis = this.extractStructuredAnalysis(data.recommendation);
    
    // 提取推荐建议列表
    const recommendations = this.extractRecommendationsFromText(data.recommendation);
    
    return {
      keyword,
      dateRange: `${startDate} - ${endDate}`,
      trendData,
      sentimentData,
      analysis: data.recommendation,
      recommendations,
      structuredAnalysis
    };
  },
  
  /**
   * 从推荐文本中提取结构化分析
   */
  extractStructuredAnalysis(text: string): StructuredAnalysis {
    return {
      overallAnalysis: this.extractSection(text, "1. Analysis Results-", "2. Recommendation-"),
      recommendation: this.extractSection(text, "2. Recommendation-", "3. Justification-"),
      estimatedUnits: this.extractSection(text, "4. Estimated Units-", "5. Important Considerations-"),
      considerations: this.extractConsiderations(text),
      disclaimer: this.extractSection(text, "Disclaimer-", "")
    };
  },
  
  /**
   * 从文本中提取部分内容
   */
  extractSection(text: string, startMarker: string, endMarker: string): string {
    const startIndex = text.indexOf(startMarker);
    if (startIndex === -1) return '';
    
    const sectionStart = startIndex + startMarker.length;
    const sectionEnd = endMarker ? text.indexOf(endMarker, sectionStart) : text.length;
    
    if (sectionEnd === -1) return text.substring(sectionStart).trim();
    return text.substring(sectionStart, sectionEnd).trim();
  },
  
  /**
   * 提取考虑因素列表
   */
  extractConsiderations(text: string): string[] {
    const considerationsText = this.extractSection(text, "5. Important Considerations-", "Disclaimer-");
    if (!considerationsText) return [];
    
    return considerationsText
      .split('-')
      .map(item => item.trim())
      .filter(item => item.length > 0);
  },
  
  /**
   * 从推荐文本中提取建议
   */
  extractRecommendationsFromText(text: string): string[] {
    // 尝试提取 "3. Justification-" 后面的内容
    const justificationSection = this.extractSection(text, "3. Justification-", "4. Estimated Units-");
    if (!justificationSection) {
      // 如果没找到，返回默认建议
      return [
        "Review market trends for potential shifts",
        "Monitor competitor activities",
        "Consider targeted marketing campaigns"
      ];
    }
    
    // 将justification部分按短句分割
    return justificationSection
      .split('.')
      .map(item => item.trim())
      .filter(item => item.length > 0 && item.charAt(0) === '-')
      .map(item => item.substring(1).trim());
  }
};