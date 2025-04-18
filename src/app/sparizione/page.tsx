"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DiscordCard from '@/components/DiscordCard';

export default function UserProfilePage() {
  const [isEntered, setIsEntered] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  const handleEnter = async () => {
    try {
      const audio = new Audio('/music/scam-god.mp3');
      await audio.play();
      audio.pause();
      audio.remove();
      setAudioUnlocked(true);
    } catch (error) {
      console.error('Failed to unlock audio:', error);
    }
    setIsEntered(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div
            key="enter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 cursor-pointer select-none"
            onClick={handleEnter}
          >
            <motion.span
              className="text-white/80 text-2xl font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              click to enter...
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <DiscordCard />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#5865F2 1px, transparent 1px), linear-gradient(to right, #5865F2 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none" />
    </div>
  );
} 
