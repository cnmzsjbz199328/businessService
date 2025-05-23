"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import TrendChart from '@/components/results/TrendChart';
import SentimentChart from '@/components/results/SentimentChart';
import { analysisService } from '@/services/analysisService';
import { AnalysisResult } from '@/services/types';

// 创建一个内部组件来使用 useSearchParams
function ResultsContent() {
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const keyword = searchParams.get('keyword') || '';
        const startDate = searchParams.get('startDate') || '';
        const endDate = searchParams.get('endDate') || '';
        const videoCount = Number(searchParams.get('videoCount')) || 50;
        const commentCount = Number(searchParams.get('commentCount')) || 100;
        
        const results = await analysisService.requestAnalysis({
          keyword,
          startDate,
          endDate,
          videoCount,
          commentCount
        });
        
        setResults(results);
      } catch (error) {
        console.error('Failed to fetch results:', error);
        // 处理错误状态
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [searchParams]);

  // 修改 handleExport 函数
  const handleExport = () => {
    if (!results) return;
    
    // 创建CSV格式的数据
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // 添加趋势数据
    csvContent += "Trend Data\n";
    csvContent += "Date,Interest\n";
    results.trendData.forEach(item => {
      csvContent += `${item.date},${item.interest}\n`;
    });
    
    // 添加情感分析数据
    csvContent += "\nSentiment Data\n";
    csvContent += "Sentiment,Value\n";
    results.sentimentData.forEach(item => {
      csvContent += `${item.sentiment},${item.value}\n`;
    });
    
    // 添加结构化分析或旧格式的分析
    if (results.structuredAnalysis) {
      csvContent += "\nOverall Analysis\n";
      csvContent += results.structuredAnalysis.overallAnalysis.replace(/,/g, ";") + "\n\n";
      
      csvContent += "Recommendation\n";
      csvContent += results.structuredAnalysis.recommendation.replace(/,/g, ";") + "\n\n";
      
      csvContent += "Estimated Units\n";
      csvContent += results.structuredAnalysis.estimatedUnits.replace(/,/g, ";") + "\n\n";
      
      if (results.structuredAnalysis.considerations.length > 0) {
        csvContent += "Important Considerations\n";
        results.structuredAnalysis.considerations.forEach(item => {
          csvContent += `* ${item.replace(/,/g, ";")}\n`;
        });
        csvContent += "\n";
      }
      
      if (results.structuredAnalysis.disclaimer) {
        csvContent += "Disclaimer\n";
        csvContent += results.structuredAnalysis.disclaimer.replace(/,/g, ";") + "\n";
      }
    } else {
      // 原来的格式
      csvContent += `\nAnalysis\n${results.analysis}\n\n`;
      csvContent += "Recommendations\n";
      results.recommendations.forEach(rec => {
        csvContent += `${rec}\n`;
      });
    }
    
    // 创建下载链接并触发下载
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${results.keyword}_analysis.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 返回你现有的 JSX 内容
  if (loading) {
    return (
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-3">Loading analysis results...</span>
          </div>
        </div>
      </main>
    );
  }

  if (!results) {
    return (
      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Unable to load analysis results</h2>
            <p className="mb-4">An error occurred while loading data. Please try again.</p>
            <Link href="/" className="inline-block py-2 px-4 bg-blue-600 text-white rounded-md">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">Analysis Results</h1>
            <p className="text-gray-500 dark:text-gray-400">Keyword: {results.keyword} | Date Range: {results.dateRange}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center py-2 px-4 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print Report
            </button>
            <button onClick={handleExport} className="flex items-center py-2 px-4 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export Data
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold">Trend Analysis</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Interest trend changes over the specified time period</p>
            </div>
            <div className="p-4">
              <div className="h-[300px]">
                <TrendChart data={results.trendData} />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold">Sentiment Distribution</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Distribution of user sentiment toward the keyword</p>
            </div>
            <div className="p-4">
              <div className="h-[300px]">
                <SentimentChart data={results.sentimentData} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold">Analysis Conclusions</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Comprehensive analysis and recommendations based on data</p>
          </div>
          <div className="p-4">
            {results.structuredAnalysis ? (
              <div className="space-y-6">
                {/* 整体分析部分 */}
                <div>
                  <h3 className="font-medium text-lg mb-2">Overall Analysis</h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {results.structuredAnalysis.overallAnalysis}
                    </p>
                  </div>
                </div>
                
                {/* 推荐行动部分 */}
                <div>
                  <h3 className="font-medium text-lg mb-2">Recommendation</h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {results.structuredAnalysis.recommendation}
                    </p>
                  </div>
                </div>
                
                {/* 预估数量部分 */}
                <div>
                  <h3 className="font-medium text-lg mb-2">Estimated Units</h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {results.structuredAnalysis.estimatedUnits}
                    </p>
                  </div>
                </div>
                
                {/* 重要考虑因素部分 */}
                {results.structuredAnalysis.considerations.length > 0 && (
                  <div>
                    <h3 className="font-medium text-lg mb-2">Important Considerations</h3>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                      <ul className="list-disc pl-5 space-y-2">
                        {results.structuredAnalysis.considerations.map((item, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {/* 免责声明部分 */}
                {results.structuredAnalysis.disclaimer && (
                  <div>
                    <h3 className="font-medium text-lg mb-2">Disclaimer</h3>
                    <div className="bg-gray-100/50 dark:bg-gray-800/30 p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                        {results.structuredAnalysis.disclaimer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* 现有的非结构化显示 */}
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Overall Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">{results.analysis}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recommendations</h3>
                  <ul className="list-inside text-gray-600 dark:text-gray-400">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="list-disc ml-4">{rec}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

// 主页面组件
export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-3">Loading...</span>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
