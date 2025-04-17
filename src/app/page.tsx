"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import DiscordCard from '@/components/DiscordCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const router = useRouter();
  const [stars, setStars] = useState<Array<{
    top: string;
    left: string;
    delay: string;
    opacity: number;
  }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const newStars = Array(20).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setStars(newStars);
  }, []);

  useEffect(() => {
    setMounted(true);
    document.title = 'facked.lol';
  }, []);

  const handleEnter = () => {
    const audio = new Audio();
    audio.src = '/music/scamgod.mp3';
    audio.load();
    audio.volume = 0;
    audio.play().then(() => {
      setTimeout(() => {
        audio.pause();
        audio.remove();
        router.push('/sparizione');
      }, 1);
    }).catch(() => {
      router.push('/sparizione');
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[#0B1622]" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Glow Effects */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#60A5FA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col">
        <Navbar />
        
        <motion.main 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col items-center justify-center px-4 min-h-[calc(100vh-4rem)]"
        >
          {/* Stars Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  top: star.top,
                  left: star.left,
                  animationDelay: star.delay,
                  opacity: star.opacity
                }}
              />
            ))}
          </div>

          <div className="flex-1" /> {/* Top spacer */}

          <motion.div
            variants={item}
            className="text-center relative"
          >
            <h1 className="text-[120px] font-bold text-white mb-8 tracking-tight leading-none">
              FACKED
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-white">.LOL</span>
            </h1>
            <p className="text-[#60A5FA]/80 text-xl max-w-2xl mx-auto leading-relaxed mb-16">
              Advanced Discord automation with powerful token management, 
              <br />mass messaging and server tools
            </p>

            <div className="flex items-center justify-center gap-6">
              <Link
                href="/get-started"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#60A5FA] rounded-xl text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/pricing"
                className="group relative inline-flex px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl text-white font-medium border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-[#60A5FA]/30"
              >
                <span className="relative z-10">View Pricing</span>
                <div className="absolute inset-0 rounded-xl bg-[#60A5FA]/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </Link>
            </div>
          </motion.div>

          <div className="flex-1" /> {/* Bottom spacer */}
        </motion.main>

        {/* Footer */}
        <div className="relative border-t border-white/5">
          <div className="container mx-auto px-6 py-8">
            <p className="text-white/40 text-sm">
              © 2025 facked.lol. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}