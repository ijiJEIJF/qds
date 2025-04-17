"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Check if cookie consent was previously given
      const hasConsent = localStorage.getItem('cookie-consent');
      if (!hasConsent) {
        // Show banner if no consent was previously given
        setIsVisible(true);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem('cookie-consent', 'true');
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem('cookie-consent', 'false');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-950/90 border-t border-blue-400/10 p-4 animate-slide-up backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/80 text-sm">
          <p>
            We use cookies to enhance your browsing experience and analyze our traffic.
            <Link
              href="/cookies"
              className="text-white underline ml-1 hover:text-white/80"
            >
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-blue-600/10 hover:bg-blue-600/20 text-white rounded-lg transition-all duration-300"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
