"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [rescueOpen, setRescueOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-500 to-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Median
            </Link>
          </div>


          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-white hover:text-green-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/application" 
                  className="text-white hover:text-green-200 transition-colors"
                >
                  Application
                </Link>
              </li>
              <li>
                <Link 
                  href="/team" 
                  className="text-white hover:text-green-200 transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white hover:text-green-200 transition-colors"
                >
                  About
                </Link>
              </li>
              

              <li className="relative">
                <button 
                  className="flex items-center text-white hover:text-green-200 transition-colors"
                  onClick={() => {
                    setMediaOpen(!mediaOpen);
                    if (rescueOpen) setRescueOpen(false);
                  }}
                >
                  Media
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {mediaOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/media/gallery"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                        role="menuitem"
                        onClick={() => setMediaOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        Gallery
                      </Link>
                      <Link
                        href="/media/my-uploads"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                        role="menuitem"
                        onClick={() => setMediaOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        My Uploads
                      </Link>
                      <Link
                        href="/media/upload"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                        role="menuitem"
                        onClick={() => setMediaOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                        </svg>
                        Upload Image
                      </Link>
                      <Link
                        href="/media/videos"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                        role="menuitem"
                        onClick={() => setMediaOpen(false)}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                        Videos
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              

              <li className="relative">
                <button 
                  className="flex items-center text-white hover:text-green-200 transition-colors"
                  onClick={() => {
                    setRescueOpen(!rescueOpen);
                    if (mediaOpen) setMediaOpen(false);
                  }}
                >
                  Rescue4src
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {rescueOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      href="/rescue4src/zirh" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Zirh
                    </Link>
                    <Link 
                      href="/rescue4src/form" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Form
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>


          <div className="md:hidden">
            <button className="text-white hover:text-green-200 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
