"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [rescueOpen, setRescueOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-[#0ed632] transition-colors">
              Median
            </Link>
          </div>


          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-[#0ed632] font-medium transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/application" 
                  className="text-gray-600 hover:text-[#0ed632] font-medium transition-colors"
                >
                  Application
                </Link>
              </li>
              <li>
                <Link 
                  href="/team" 
                  className="text-gray-600 hover:text-[#0ed632] font-medium transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-[#0ed632] font-medium transition-colors"
                >
                  About
                </Link>
              </li>
              

              <li className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-[#0ed632] font-medium transition-colors"
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
                    className="absolute top-full left-0 mt-1 w-48 rounded shadow-sm bg-white border border-gray-100"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/media/gallery"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#0ed632] hover:bg-[#f0fff0]"
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
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#0ed632] hover:bg-[#f0fff0]"
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
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#0ed632] hover:bg-[#f0fff0]"
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
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#0ed632] hover:bg-[#f0fff0]"
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
                  className="flex items-center text-gray-600 hover:text-[#0ed632] font-medium transition-colors"
                  onClick={() => {
                    setRescueOpen(!rescueOpen);
                    if (mediaOpen) setMediaOpen(false);
                  }}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {rescueOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded shadow-sm border border-gray-100 py-1 z-10">
                    <Link 
                      href="/resources/armor" 
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      Armor
                    </Link>
                    <Link 
                      href="/resources/jersey" 
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      Jersey
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>


          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-[#0ed632] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className="block px-4 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/application" 
                    className="block px-4 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Application
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/team" 
                    className="block px-4 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="block px-4 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="border-t border-gray-100 pt-2 mt-2">
                  <p className="px-4 text-sm font-medium text-gray-500">Media</p>
                  <Link 
                    href="/media/gallery" 
                    className="block px-6 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link 
                    href="/media/my-uploads" 
                    className="block px-6 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Uploads
                  </Link>
                  <Link 
                    href="/media/upload" 
                    className="block px-6 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Upload Image
                  </Link>
                  <Link 
                    href="/media/videos" 
                    className="block px-6 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Videos
                  </Link>
                </li>
                <li className="border-t border-gray-100 pt-2 mt-2">
                  <p className="px-4 text-sm font-medium text-gray-500">Rescue4src</p>
                  <Link 
                    href="/rescue4src/zirh" 
                    className="block px-6 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Zirh
                  </Link>
                  <Link 
                    href="/rescue4src/form" 
                    className="block px-6 py-2 text-gray-600 hover:text-[#0ed632] hover:bg-[#f0fff0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Form
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
