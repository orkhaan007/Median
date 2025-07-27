import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getAllMedia, getCurrentUser } from "@/utils/gallery/db";
import VideoGallery from "@/components/gallery/VideoGallery";
import Layout from "@/components/layout/Layout";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Videos - Median",
  description: "View YouTube videos shared by Median users",
};

export default async function VideosPage() {
  const currentUser = await getCurrentUser();
  
  if (!currentUser) {
    redirect("/login");
  }
  
  const allMedia = await getAllMedia();
  
  // Filter to only show YouTube videos
  const youtubeVideos = allMedia.filter(media => media.media_type === "youtube");
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800">All Videos</h1>
            <div className="mt-2">
              <Link 
                href="/media/gallery" 
                className="text-gray-600 hover:text-green-700 font-medium"
              >
                View All Images
              </Link>
            </div>
          </div>
          
          <Link
            href="/media/upload"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Upload Media
          </Link>
        </div>
        
        <Suspense fallback={<div>Loading videos...</div>}>
          {youtubeVideos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No videos have been shared yet.</p>
              <Link
                href="/media/upload"
                className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Share a YouTube Video
              </Link>
            </div>
          ) : (
            <VideoGallery videos={youtubeVideos} currentUser={currentUser} />
          )}
        </Suspense>
      </div>
    </Layout>
  );
}
