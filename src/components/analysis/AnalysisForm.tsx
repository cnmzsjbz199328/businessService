"use client";

import { useState, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { analysisService } from '@/services/analysisService';
import styles from './AnalysisForm.module.css';

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
      await analysisService.requestAnalysis({
        keyword: formData.get('keyword') as string,
        startDate: formData.get('startDate') as string,
        endDate: formData.get('endDate') as string,
        videoCount: Number(formData.get('videoCount')),
        commentCount: Number(formData.get('commentCount')),
        file: fileInputRef.current?.files?.[0]
      });

      router.push(`/results?keyword=${formData.get('keyword')}&startDate=${formData.get('startDate')}&endDate=${formData.get('endDate')}&videoCount=${formData.get('videoCount')}&commentCount=${formData.get('commentCount')}`);
    } catch (error) {
      console.error('Analysis request failed:', error);
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
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <form id="analysisForm" onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="keyword" className={styles.label}>Keyword</label>
            <input 
              type="text" 
              id="keyword" 
              name="keyword" 
              className={styles.input}
              placeholder="Enter keyword to analyze" 
              required 
            />
            <p className={styles.helpText}>Enter keyword or phrase you want to analyze</p>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Company Data Upload</label>
            <div className={styles.fileUploadContainer}>
              <label htmlFor="fileUpload" className={styles.fileUploadLabel}>
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
                className={styles.fileUploadInput}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <span className={styles.fileName}>{fileName}</span>
            </div>
            <p className={styles.helpText}>Upload company-related data (PDF, DOCX, XLSX formats supported)</p>
          </div>

          <div className={styles.dateContainer}>
            <div>
              <label htmlFor="startDate" className={styles.label}>Start Date</label>
              <input 
                type="date" 
                id="startDate" 
                name="startDate" 
                className={styles.input}
                defaultValue={new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().split('T')[0]}
                required 
              />
            </div>
            <div>
              <label htmlFor="endDate" className={styles.label}>End Date</label>
              <input 
                type="date" 
                id="endDate" 
                name="endDate" 
                className={styles.input}
                defaultValue={new Date().toISOString().split('T')[0]}
                required 
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="videoCount" className={styles.label}>Number of Videos to Search: {videoCount}</label>
            <input 
              type="range" 
              id="videoCount" 
              name="videoCount" 
              className={styles.rangeInput}
              min="10" 
              max="200" 
              step="10" 
              value={videoCount}
              onChange={(e) => setVideoCount(Number(e.target.value))}
            />
            <p className={styles.helpText}>Set the number of videos to analyze (10-200)</p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="commentCount" className={styles.label}>Comments to Fetch per Video: {commentCount}</label>
            <input 
              type="range" 
              id="commentCount" 
              name="commentCount" 
              className={styles.rangeInput}
              min="50" 
              max="500" 
              step="50" 
              value={commentCount}
              onChange={(e) => setCommentCount(Number(e.target.value))}
            />
            <p className={styles.helpText}>Set the number of comments to analyze per video (50-500)</p>
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Analyzing...
              </>
            ) : 'Start Analysis'}
          </button>
        </form>
      </div>
    </div>
  );
}
