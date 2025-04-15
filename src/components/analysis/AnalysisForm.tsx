"use client";

import { useState, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { analysisService } from '@/services/analysisService';

export default function AnalysisForm() {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [videoCount, setVideoCount] = useState(50);
  const [commentCount, setCommentCount] = useState(100);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Call analysis service instead of just routing
      await analysisService.requestAnalysis({
        keyword: formData.get('keyword') as string,
        startDate: formData.get('startDate') as string,
        endDate: formData.get('endDate') as string,
        videoCount: Number(formData.get('videoCount')),
        commentCount: Number(formData.get('commentCount')),
        file: fileInputRef.current?.files?.[0]
      });

      // Navigate to results page with query params
      router.push(`/results?keyword=${formData.get('keyword')}&startDate=${formData.get('startDate')}&endDate=${formData.get('endDate')}&videoCount=${formData.get('videoCount')}&commentCount=${formData.get('commentCount')}`);
    } catch (error) {
      console.error('Analysis request failed:', error);
      // Handle error state
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = () => {
    if (fileInputRef.current?.files?.length) {
      setFileName(fileInputRef.current.files[0].name);
    }
  };

  return (
    <div className="card bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="card-content p-6">
        <form id="analysisForm" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="keyword" className="block mb-2 font-medium">Keyword</label>
            <input 
              type="text" 
              id="keyword" 
              name="keyword" 
              className="w-full p-2.5 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900" 
              placeholder="Enter keyword to analyze" 
              required 
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Enter keyword or phrase you want to analyze</p>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Company Data Upload</label>
            <div className="flex items-center">
              <label 
                htmlFor="fileUpload" 
                className="flex items-center px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Choose File
              </label>
              <input 
                type="file" 
                id="fileUpload" 
                name="fileUpload" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <span className="ml-3 text-sm">{fileName}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Upload company-related data (PDF, DOCX, XLSX formats supported)</p>
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block mb-2 font-medium">Start Date</label>
              <input 
                type="date" 
                id="startDate" 
                name="startDate" 
                className="w-full p-2.5 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900" 
                defaultValue={new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().split('T')[0]}
                required 
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block mb-2 font-medium">End Date</label>
              <input 
                type="date" 
                id="endDate" 
                name="endDate" 
                className="w-full p-2.5 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900" 
                defaultValue={new Date().toISOString().split('T')[0]}
                required 
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="videoCount" className="block mb-2 font-medium">Number of Videos to Search: {videoCount}</label>
            <input 
              type="range" 
              id="videoCount" 
              name="videoCount" 
              className="w-full h-2 rounded-lg appearance-none bg-gray-200 dark:bg-gray-700" 
              min="10" 
              max="200" 
              step="10" 
              value={videoCount}
              onChange={(e) => setVideoCount(Number(e.target.value))}
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Set the number of videos to analyze (10-200)</p>
          </div>

          <div className="mb-6">
            <label htmlFor="commentCount" className="block mb-2 font-medium">Comments to Fetch per Video: {commentCount}</label>
            <input 
              type="range" 
              id="commentCount" 
              name="commentCount" 
              className="w-full h-2 rounded-lg appearance-none bg-gray-200 dark:bg-gray-700" 
              min="50" 
              max="500" 
              step="50" 
              value={commentCount}
              onChange={(e) => setCommentCount(Number(e.target.value))}
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Set the number of comments to analyze per video (50-500)</p>
          </div>

          <button 
            type="submit" 
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex items-center justify-center disabled:opacity-70"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="inline-block w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Analyzing...
              </>
            ) : 'Start Analysis'}
          </button>
        </form>
      </div>
    </div>
  );
}
