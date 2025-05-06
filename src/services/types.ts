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

// 新增：情感分析 API 响应类型
export type SentimentResponse = {
  comment: string;
  sentiment: number;
};

// ...现有代码...

// 新增：趋势 API 响应类型
export type TrendDataResponse = {
  date: string;
  timestamp: string;
  values: {
    query: string;
    value: string;
    extracted_value: number;
  }[];
}[];