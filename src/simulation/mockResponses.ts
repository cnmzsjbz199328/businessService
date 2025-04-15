import { mockTrendData, mockSentimentData, mockAnalyses, mockRecommendations } from './mockData';

export type AnalysisResult = {
  keyword: string;
  dateRange: string;
  trendData: { date: string; interest: number }[];
  sentimentData: { sentiment: string; value: number }[];
  analysis: string;
  recommendations: string[];
};

/**
 * Simulates an API call to get analysis results
 */
export async function getMockAnalysisResponse(
  keyword: string,
  startDate: string,
  endDate: string,
  videoCount: number,
  commentCount: number
): Promise<AnalysisResult> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Get the keyword or fallback to a default
  const normalizedKeyword = keyword.toLowerCase();
  const keywordMatch = Object.keys(mockTrendData).find(k => 
    k.toLowerCase().includes(normalizedKeyword) || normalizedKeyword.includes(k.toLowerCase())
  ) || "iPhone";
  
  return {
    keyword: keyword,
    dateRange: `${startDate} - ${endDate}`,
    trendData: mockTrendData[keywordMatch] || mockTrendData["iPhone"],
    sentimentData: mockSentimentData[keywordMatch] || mockSentimentData["iPhone"],
    analysis: mockAnalyses[keywordMatch] || mockAnalyses["iPhone"],
    recommendations: mockRecommendations[keywordMatch] || mockRecommendations["iPhone"]
  };
}