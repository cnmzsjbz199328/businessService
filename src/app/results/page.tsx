"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import TrendChart from '@/components/results/TrendChart';
import SentimentChart from '@/components/results/SentimentChart';
import { analysisService } from '@/services/analysisService';
import { AnalysisResult } from '@/services/types';

export default function ResultsPage() {
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
        // Handle error state
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [searchParams]);
  
  const handleExport = () => {
    if (results) {
      analysisService.exportAnalysisData(results);
    }
  };
  
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
