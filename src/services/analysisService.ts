import { apiClient } from './api';
import { AnalysisParams, AnalysisResult } from './types';

/**
 * Service for handling analysis functionality
 */
export const analysisService = {
  /**
   * Request analysis based on form parameters
   */
  async requestAnalysis(params: AnalysisParams): Promise<AnalysisResult> {
    try {
      return await apiClient.getAnalysisResults(params);
    } catch (error) {
      console.error('Analysis request failed:', error);
      throw error;
    }
  },
  
  /**
   * Export analysis results (e.g., as CSV)
   */
  exportAnalysisData(data: AnalysisResult): void {
    // Create CSV content
    const trendCSV = [
      'Date,Interest',
      ...data.trendData.map(item => `${item.date},${item.interest}`)
    ].join('\n');
    
    const sentimentCSV = [
      'Sentiment,Value',
      ...data.sentimentData.map(item => `${item.sentiment},${item.value}`)
    ].join('\n');
    
    const csvContent = `
Analysis Results for: ${data.keyword}
Date Range: ${data.dateRange}

TREND DATA:
${trendCSV}

SENTIMENT DATA:
${sentimentCSV}

ANALYSIS:
${data.analysis}

RECOMMENDATIONS:
${data.recommendations.join('\n')}
    `.trim();
    
    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `analysis_${data.keyword.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};