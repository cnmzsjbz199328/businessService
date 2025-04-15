import { AnalysisParams, AnalysisResult } from './types';
import { getMockAnalysisResponse } from '../simulation/mockResponses';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';
const USE_MOCK_DATA = process.env.NODE_ENV === 'development';

/**
 * API client for making requests to the backend
 */
export const apiClient = {
  /**
   * Get analysis results based on parameters
   */
  async getAnalysisResults(params: AnalysisParams): Promise<AnalysisResult> {
    if (USE_MOCK_DATA) {
      return await getMockAnalysisResponse(
        params.keyword,
        params.startDate,
        params.endDate,
        params.videoCount,
        params.commentCount
      );
    }
    
    try {
      const formData = new FormData();
      formData.append('keyword', params.keyword);
      formData.append('startDate', params.startDate);
      formData.append('endDate', params.endDate);
      formData.append('videoCount', params.videoCount.toString());
      formData.append('commentCount', params.commentCount.toString());
      
      if (params.file) {
        formData.append('file', params.file);
      }
      
      const response = await fetch(`${API_BASE_URL}/analysis`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      return await response.json() as AnalysisResult;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
};