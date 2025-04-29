import { AnalysisParams, AnalysisResult } from './types';
import { getMockAnalysisResponse } from '../simulation/mockResponses';

/**
 * API client for making requests to the backend
 * 已简化为只使用模拟数据
 */
export const apiClient = {
  /**
   * Get analysis results based on parameters
   * 所有请求均返回模拟数据
   */
  async getAnalysisResults(params: AnalysisParams): Promise<AnalysisResult> {
    // 添加日志，调试用
    console.log('API request params:', params);
    console.log('Always using mock data');
    
    // 直接返回模拟数据，不再尝试调用实际 API
    return await getMockAnalysisResponse(
      params.keyword,
      params.startDate,
      params.endDate,
      params.videoCount,
      params.commentCount
    );
  }
};