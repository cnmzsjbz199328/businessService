import { AnalysisParams, AnalysisResult, SentimentResponse, TrendDataResponse } from './types';
import { getMockAnalysisResponse } from '../simulation/mockResponses';

// 获取环境变量
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';
const GEMINI_API_URL = process.env.NEXT_PUBLIC_GEMINI_API_URL || '/api/gemini';
const SENTIMENT_API_URL = process.env.NEXT_PUBLIC_SENTIMENT_API_URL || '/api/sentiment';
const TREND_API_URL = process.env.NEXT_PUBLIC_TREND_API_URL || '/api/trend';


/**
 * API client for making requests to the backend
 */
export const apiClient = {
  /**
   * Get analysis results based on parameters
   */
  async getAnalysisResults(params: AnalysisParams): Promise<AnalysisResult> {
    // 添加日志，调试用
    console.log('API request params:', params);
    
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
      // 1. 获取 Gemini 分析数据
      const geminiResponse = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: params.keyword,
          startDate: params.startDate,
          endDate: params.endDate
        })
      });
      
      if (!geminiResponse.ok) {
        throw new Error(`Gemini API error: ${geminiResponse.status}`);
      }
      
      const geminiData = await geminiResponse.text();
      console.log('Gemini API response:', geminiData);
      
      // 2. 获取趋势数据
      const trendResponse = await fetch(TREND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: params.keyword,
          startDate: params.startDate,
          endDate: params.endDate
        })
      });
      
      if (!trendResponse.ok) {
        throw new Error(`Trend API error: ${trendResponse.status}`);
      }
      
      const trendData = await trendResponse.json() as TrendDataResponse;
      console.log('Trend API response:', trendData);
      
      // 3. 获取情感分析数据
      const sentimentResponse = await fetch(SENTIMENT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: params.keyword,
          searchMaxResults: params.videoCount || 5,
          commentMaxResults: params.commentCount || 10
        })
      });
      
      if (!sentimentResponse.ok) {
        throw new Error(`Sentiment API error: ${sentimentResponse.status}`);
      }
      
      const sentimentData = await sentimentResponse.json() as SentimentResponse[];
      console.log('Sentiment API response:', sentimentData);
      
      // 4. 处理数据，生成分析结果
      return this.processApiResponses(
        params.keyword, 
        params.startDate, 
        params.endDate, 
        geminiData, 
        sentimentData,
        trendData
      );
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
   * 处理 API 响应，生成分析结果
   */
  processApiResponses(
    keyword: string, 
    startDate: string, 
    endDate: string, 
    geminiText: string, 
    sentimentData: SentimentResponse[],
    trendData: TrendDataResponse
  ): AnalysisResult {
    // 1. 从 Gemini 响应中提取关键信息
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sentimentMatch = geminiText.match(/Sentiment:\s*(.*?)\s*\(/i);
    const trendMatch = geminiText.match(/Trend:\s*(.*?)\s*\(/i);
    
    // 获取趋势值用于日志记录
    const trendDescription = trendMatch ? trendMatch[1].trim() : 'Stable';
    console.log('Extracted trend description:', trendDescription);
    
    // 2. 处理情感数据，计算情感分布
    const sentimentDistribution = this.calculateSentimentDistribution(sentimentData);
    
    // 3. 处理API返回的趋势数据
    const processedTrendData = this.processTrendData(trendData);
    
    // 4. 从 Gemini 响应中提取建议
    const recommendations = this.extractRecommendations(geminiText);
    
    return {
      keyword,
      dateRange: `${startDate} - ${endDate}`,
      trendData: processedTrendData,
      sentimentData: sentimentDistribution,
      analysis: geminiText,
      recommendations
    };
  },
  
  /**
   * 处理趋势 API 数据
   */
  processTrendData(data: TrendDataResponse): { date: string; interest: number }[] {
    return data.map(item => {
      // 提取感兴趣的数据
      const value = item.values[0].extracted_value;
      // 格式化日期为 YYYY-MM-DD 格式，与组件期望格式一致
      const dateParts = item.date.split(' ');
      let month: string;
      
      // 处理月份格式
      switch (dateParts[0]) {
        case 'Jan': month = '01'; break;
        case 'Feb': month = '02'; break;
        case 'Mar': month = '03'; break;
        case 'Apr': month = '04'; break;
        case 'May': month = '05'; break;
        case 'Jun': month = '06'; break;
        case 'Jul': month = '07'; break;
        case 'Aug': month = '08'; break;
        case 'Sep': month = '09'; break;
        case 'Oct': month = '10'; break;
        case 'Nov': month = '11'; break;
        case 'Dec': month = '12'; break;
        default: month = '01';
      }
      
      // 处理日期格式
      const day = dateParts[1].replace(',', '').padStart(2, '0');
      const year = dateParts[2];
      const formattedDate = `${year}-${month}-${day}`;
      
      return {
        date: formattedDate,
        interest: value
      };
    });
  },
  
  /**
   * 计算情感分布
   */
  calculateSentimentDistribution(data: SentimentResponse[]): { sentiment: string; value: number }[] {
    // 初始化计数器
    let positive = 0;
    let neutral = 0;
    let negative = 0;
    
    // 统计情感分布
    data.forEach(item => {
      const sentiment = item.sentiment;
      if (sentiment > 0) {
        positive++;
      } else if (sentiment < 0) {
        negative++;
      } else {
        neutral++;
      }
    });
    
    // 计算百分比
    const total = data.length || 1; // 避免除以零
    
    return [
      { sentiment: "Positive", value: Math.round((positive / total) * 100) },
      { sentiment: "Neutral", value: Math.round((neutral / total) * 100) },
      { sentiment: "Negative", value: Math.round((negative / total) * 100) }
    ];
  },
  
  /**
   * 从 Gemini 响应中提取建议
   */
  extractRecommendations(text: string): string[] {
    const recommendations: string[] = [];
    
    // 尝试提取 "Recommendation:" 后面的内容
    const mainRec = text.match(/Recommendation:\s*(.*?)(?:\n|$)/i);
    if (mainRec && mainRec[1]) {
      recommendations.push(mainRec[1].trim());
    }
    
    // 尝试提取 "Important Considerations:" 后面的要点
    // 修复 "s" 标志兼容性问题，使用多行匹配的替代方案
    const considerationsRegex = /Important Considerations:([\s\S]*?)(?:Disclaimer:|$)/i;
    const considerations = text.match(considerationsRegex);
    
    if (considerations && considerations[1]) {
      // 提取每个要点
      const points = considerations[1].split(/\n\s*\*\s*/).filter(p => p.trim());
      points.forEach(point => {
        const cleanPoint = point.replace(/^\s*[-*]\s*/, '').trim();
        if (cleanPoint && !cleanPoint.includes('Important Considerations')) {
          recommendations.push(cleanPoint);
        }
      });
    }
    
    // 确保至少有三条建议
    if (recommendations.length === 0) {
      return [
        "Review market trends for potential shifts",
        "Monitor competitor activities",
        "Consider targeted marketing campaigns"
      ];
    }
    
    return recommendations;
  }
};