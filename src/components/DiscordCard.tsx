"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTelegram } from 'react-icons/fa';
import { GiCrown } from 'react-icons/gi';
import { RiSparklingFill } from 'react-icons/ri';
import { SiLitecoin } from 'react-icons/si';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

export default function DiscordCard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const [isDeletingTitle, setIsDeletingTitle] = useState(false);
  const pageTitleRef = useRef<number>(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const sparkleIdRef = useRef(0);
  const lastSparkleTime = useRef(0);
  const typingRef = useRef<number>(0);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const titleText = "@sparizione";
  const fullText = "facked.lol owner";
  const ltcAddress = "ltc1qy2gvlyv2d0r7qvtkgmle0tq690t9p9znh76e46";

  // Page title typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeTitle = () => {
      if (!isDeletingTitle && pageTitleRef.current < titleText.length) {
        setPageTitle(titleText.slice(0, pageTitleRef.current + 1));
        pageTitleRef.current += 1;
        timeout = setTimeout(typeTitle, 150);
      } else if (!isDeletingTitle && pageTitleRef.current === titleText.length) {
        timeout = setTimeout(() => setIsDeletingTitle(true), 2000);
      } else if (isDeletingTitle && pageTitleRef.current > 0) {
        setPageTitle(titleText.slice(0, pageTitleRef.current - 1));
        pageTitleRef.current -= 1;
        timeout = setTimeout(typeTitle, 100);
      } else if (isDeletingTitle && pageTitleRef.current === 0) {
        setIsDeletingTitle(false);
        timeout = setTimeout(typeTitle, 1000);
      }
    };

    timeout = setTimeout(typeTitle, 1000);
    return () => clearTimeout(timeout);
  }, [isDeletingTitle]);

  // Update page title
  useEffect(() => {
    document.title = pageTitle || 'facked.lol';
  }, [pageTitle]);

  // Typing effect with proper looping and erasing
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeText = () => {
      if (!isDeleting && typingRef.current < fullText.length) {
        setTypedText(fullText.slice(0, typingRef.current + 1));
        typingRef.current += 1;
        timeout = setTimeout(typeText, 150);
      } else if (!isDeleting && typingRef.current === fullText.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingRef.current > 0) {
        setTypedText(fullText.slice(0, typingRef.current - 1));
        typingRef.current -= 1;
        timeout = setTimeout(typeText, 100);
      } else if (isDeleting && typingRef.current === 0) {
        setIsDeleting(false);
        timeout = setTimeout(typeText, 1000);
      }
    };

    timeout = setTimeout(typeText, 1000);
    return () => clearTimeout(timeout);
  }, [isDeleting]);

  // Handle sparkle creation and cleanup
  useEffect(() => {
    const cleanupSparkles = () => {
      const now = Date.now();
      setSparkles(sparkles => sparkles.filter(sparkle => now - sparkle.createdAt < 1000));
    };

    const interval = setInterval(cleanupSparkles, 50);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse movement for 3D effect and sparkles
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // 3D effect
    const tiltX = ((y * 2 - 1) * -5);
    const tiltY = ((x * 2 - 1) * 5);
    setMousePosition({ x: tiltX, y: tiltY });

    // Add new sparkle
    const now = Date.now();
    if (now - lastSparkleTime.current > 50) { // Limit sparkle creation rate
      const newSparkle = {
        id: sparkleIdRef.current++,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        createdAt: now
      };
      setSparkles(sparkles => [...sparkles, newSparkle]);
      lastSparkleTime.current = now;
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Handle mouse movement for sparkle effect
  const handleNameMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!nameRef.current) return;
    
    const rect = nameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleNameMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Copy LTC address without alert
  const copyLTCAddress = () => {
    navigator.clipboard.writeText(ltcAddress);
  };

  return (
    <div className="relative w-[500px]">
      <motion.div 
        ref={cardRef}
        className="w-full"
        style={{ 
          transform: `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
          transition: "transform 0.2s ease-out",
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sparkles Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence>
            {sparkles.map(sparkle => (
              <motion.div
                key={sparkle.id}
                className="absolute pointer-events-none"
                style={{
                  left: sparkle.x,
                  top: sparkle.y,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative">
                  <RiSparklingFill className="w-3 h-3 text-[#5865F2] absolute" style={{ transform: 'rotate(0deg)' }} />
                  <RiSparklingFill className="w-3 h-3 text-[#5865F2] absolute" style={{ transform: 'rotate(45deg)' }} />
                  <RiSparklingFill className="w-3 h-3 text-[#5865F2] absolute" style={{ transform: 'rotate(90deg)' }} />
                  <RiSparklingFill className="w-3 h-3 text-[#5865F2] absolute" style={{ transform: 'rotate(135deg)' }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-[#1a1b1e] via-[#1E1F22] to-[#2B2D31] rounded-2xl p-6 shadow-xl overflow-hidden border border-white/5">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Crown Badge */}
          <div 
            className="absolute top-4 right-4 cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className="backdrop-blur-sm bg-black/20 p-2 rounded-full">
              <GiCrown className="w-5 h-5 text-yellow-400" />
            </div>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 mt-2 backdrop-blur-md bg-black/90 text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap z-50"
                >
                  Owner
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Content */}
          <div className="relative pt-16 pb-8 px-8 text-center z-10">
            <div className="relative inline-block">
              <div className="relative">
                <img
                  src="/images/gifs/profile.gif"
                  alt="l3n"
                  className="w-24 h-24 rounded-full border-2 border-[#5865F2] shadow-[0_0_20px_rgba(88,101,242,0.5)]"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5865F2]/20 via-transparent to-transparent" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <RiSparklingFill className="w-5 h-5 text-[#5865F2]" />
              <h2 className="text-2xl font-bold text-white font-mono">
                l3n
              </h2>
              <RiSparklingFill className="w-5 h-5 text-[#5865F2]" />
            </div>
            
            <p className="mt-2 text-white/60 text-sm max-w-md mx-auto font-mono min-h-[1.5em] backdrop-blur-sm bg-black/10 px-4 py-2 rounded-lg flex items-center justify-center gap-1">
              <span>{typedText}</span>
              <span className="inline-block w-[2px] h-4 bg-white/60 animate-blink"></span>
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <a 
                href="https://t.me/benzopedinee"
                target="_blank"
                rel="noopener noreferrer" 
                className="p-3 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <FaTelegram className="w-6 h-6 text-[#5865F2]" />
              </a>
              <button 
                onClick={copyLTCAddress}
                className="p-3 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <SiLitecoin className="w-6 h-6 text-[#5865F2]" />
              </button>
            </div>
          </div>

          {/* Discord Server Section */}
          <div className="relative mt-4 p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/images/server-icon.webp"
                  alt="Discord Server"
                  className="w-12 h-12 rounded-full border border-[#5865F2]/50 shadow-[0_0_15px_rgba(88,101,242,0.3)]"
                />
                <div className="flex flex-col">
                  <span className="text-white font-medium">TiagoReplicass</span>
                </div>
              </div>
              <a 
                href="https://discord.gg/VJbqwpRUQu"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#5865F2] hover:bg-[#5865F2]/90 transition-all duration-300 rounded-lg text-white text-sm font-medium hover:scale-105 hover:shadow-[0_0_15px_rgba(88,101,242,0.3)]"
              >
                Add on Discord →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}