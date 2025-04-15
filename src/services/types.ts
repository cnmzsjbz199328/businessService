export type TrendDataPoint = {
  date: string;
  interest: number;
};

export type SentimentDataPoint = {
  sentiment: string;
  value: number;
};

export type AnalysisResult = {
  keyword: string;
  dateRange: string;
  trendData: TrendDataPoint[];
  sentimentData: SentimentDataPoint[];
  analysis: string;
  recommendations: string[];
};

export type AnalysisParams = {
  keyword: string;
  startDate: string;
  endDate: string;
  videoCount: number;
  commentCount: number;
  file?: File;
};