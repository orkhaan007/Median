import { Suspense } from "react";
import { getAllMedia, getCurrentUser } from "@/utils/gallery/db";
import RefreshableGallery from "@/components/gallery/RefreshableGallery";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const mediaItems = await getAllMedia();
  const user = await getCurrentUser();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-800">All Images</h1>
            <div className="mt-2">
              <Link 
                href="/media/videos" 
                className="text-gray-600 hover:text-green-700 font-medium"
              >
                View All Videos
              </Link>
            </div>
          </div>
          
          {user ? (
            <Link 
              href="/media/upload" 
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Upload Media
            </Link>
          ) : (
            <Link 
              href="/sign-in" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md inline-flex items-center"
            >
              Sign in to upload
            </Link>
          )}
        </div>
        
        <Suspense fallback={<div>Loading gallery...</div>}>
          <RefreshableGallery 
            initialImages={mediaItems} 
            currentUserId={user?.id}
          />
        </Suspense>
      </div>
    </Layout>
  );
}
