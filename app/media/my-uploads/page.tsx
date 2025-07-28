"use client";

import { redirect } from "next/navigation";
import { getCurrentUser, getMediaByUser } from "@/utils/gallery/db";
import RefreshableGallery from "@/components/gallery/RefreshableGallery";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import VideoGallery from "@/components/gallery/VideoGallery";

export const dynamic = "force-dynamic";

export default function MyUploadsPage() {
  const [user, setUser] = useState<any>(null);
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('images');
  
  // Function to switch between tabs
  const switchTab = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  useEffect(() => {
    async function loadData() {
      try {
        const userData = await getCurrentUser();
        
        if (!userData) {
          redirect("/sign-in");
          return;
        }
        
        setUser(userData);
        const items = await getMediaByUser(userData.id);
        setMediaItems(items as any[]);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
    
    loadData();
  }, []);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  
  // Filter media by type
  const images = mediaItems.filter(item => item.media_type === "image");
  const videos = mediaItems.filter(item => item.media_type === "youtube");
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800">My Uploads</h1>
          </div>
          
          <Link 
            href="/media/upload" 
            className="bg-[#0ed632] hover:bg-[#0bc52c] text-white py-2 px-4 rounded-md inline-flex items-center transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Upload Media
          </Link>
        </div>
        
        <div className="mb-6 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            <li className="mr-2">
              <button 
                onClick={() => switchTab('images')} 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'images' ? 'border-[#0ed632] text-[#0ed632]' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`}
              >
                Images ({images.length})
              </button>
            </li>
            <li className="mr-2">
              <button 
                onClick={() => switchTab('videos')} 
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'videos' ? 'border-[#0ed632] text-[#0ed632]' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`}
              >
                Videos ({videos.length})
              </button>
            </li>
          </ul>
        </div>
        
        {activeTab === 'images' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Images</h2>
            {images.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="mt-4 text-xl font-medium text-gray-500">You haven't uploaded any images yet</p>
                <p className="mt-2 text-gray-500">Get started by uploading your first image</p>
                <Link 
                  href="/media/upload" 
                  className="mt-6 inline-block bg-[#0ed632] hover:bg-[#0bc52c] text-white py-2 px-6 rounded-md transition-colors"
                >
                  Upload Image
                </Link>
              </div>
            ) : (
              <Suspense fallback={<div>Loading images...</div>}>
                <RefreshableGallery initialImages={images} currentUserId={user.id} />
              </Suspense>
            )}
          </div>
        )}
        
        {activeTab === 'videos' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Videos</h2>
            {videos.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                <p className="mt-4 text-xl font-medium text-gray-500">You haven't uploaded any videos yet</p>
                <p className="mt-2 text-gray-500">Get started by uploading your first video</p>
                <Link 
                  href="/media/upload" 
                  className="mt-6 inline-block bg-[#0ed632] hover:bg-[#0bc52c] text-white py-2 px-6 rounded-md transition-colors"
                >
                  Upload Video
                </Link>
              </div>
            ) : (
              <Suspense fallback={<div>Loading videos...</div>}>
                <VideoGallery videos={videos} currentUser={user} />
              </Suspense>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
