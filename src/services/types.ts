export type TrendDataPoint = {
  date: string;
  interest: number;
};

export type SentimentDataPoint = {
  sentiment: string;
  value: number;
};

export type StructuredAnalysis = {
  overallAnalysis: string;
  recommendation: string;
  estimatedUnits: string;
  considerations: string[];
  disclaimer: string;
};

export type AnalysisResult = {
  keyword: string;
  dateRange: string;
  trendData: TrendDataPoint[];
  sentimentData: SentimentDataPoint[];
  analysis: string;
  recommendations: string[];
  structuredAnalysis?: StructuredAnalysis;
};

export type AnalysisParams = {
  keyword: string;
  startDate: string;
  endDate: string;
  videoCount: number;
  commentCount: number;
  file?: File;
};

// 只保留统一 API 响应的类型定义
export type GeminiResponse = {
  analysis: {
    input: {
      product: string;
      startDate: string;
      endDate: string;
      videoCount: number;
      commentCount: number;
    };
    inventory: Array<{
      "Beginning Inventory": number;
      "COGS": number;
      "Ending Inventory": number;
      "Sales": number;
      "Target Turnover": number;
      "id": string;
      "period": string;
    }>;
    trend: {
      trend: {
        start_value: number;
        end_value: number;
        percent_change: number;
        trend: string;
      };
      timeline: Array<{
        date: string;
        timestamp: string;
        values: Array<{
          query: string;
          value: string;
          extracted_value: number;
        }>;
      }>;
    };
    sentiment: {
      summary: {
        clearly_positive: number;
        clearly_negative: number;
        neutral: number;
        mixed: number;
      };
      chartData: Array<{
        label: string;
        value: number;
      }>;
      comments: Array<{
        comment: string;
        sentiment_score: number;
        sentiment_magnitude: number;
        sentiment: string;
      }>;
    };
  };
  recommendation: string;
};