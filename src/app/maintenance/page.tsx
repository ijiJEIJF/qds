"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  style: {
    top: string;
    left: string;
    animationDelay: string;
  };
}

export default function MaintenancePage() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = 'facked.lol';
  }, []);

  useEffect(() => {
    if (mounted) {
      const newStars = Array(5).fill(null).map((_, index) => ({
        id: index,
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${index * 2}s`
        }
      }));
      setStars(newStars);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0B1622]">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Glow Effects */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#60A5FA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute animate-shooting-star"
            style={{
              width: "2px",
              height: "2px",
              background: "white",
              boxShadow: "0 0 4px white",
              ...star.style
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center px-4 max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center mb-8">
          <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-[#60A5FA]" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <h1 className="text-4xl font-bold text-white">Under Maintenance</h1>
        </div>
        <div className="space-y-6 text-white/60">
          <p className="text-xl">
            We're currently updating our systems to serve you better.
          </p>
          <div className="flex flex-col gap-2">
            <p>Expected completion:</p>
            <p className="text-[#60A5FA] font-mono">24 hours</p>
          </div>
          <p className="text-sm">
            We apologize for any inconvenience. Follow our updates on Discord for the latest information.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#60A5FA] rounded-lg text-white font-medium transition-all duration-300 hover:bg-[#60A5FA]/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]"
          >
            <span>Return Home</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="https://discord.gg/VJbqwpRUQu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg text-white font-medium border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            <span>Discord Server</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
} 