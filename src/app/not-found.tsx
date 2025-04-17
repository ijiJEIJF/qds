"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = 'facked.lol';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0B1622]">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center px-4"
      >
        <h1 className="text-7xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/60 mb-8">
          Oops! This page has vanished into thin air.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#60A5FA] rounded-lg text-white font-medium transition-all duration-300 hover:bg-[#60A5FA]/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]"
        >
          <span>Return Home</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
} 