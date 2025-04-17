"use client";

import { motion } from "framer-motion";

interface CardProps {
  link: {
    id: string;
    label: string;
    url: string;
    icon: string;
    color?: string;
    glow?: boolean;
    animation?: 'tilt' | 'glass' | 'pulse';
  };
  onClick: (url: string) => void;
}

export function Card({ link, onClick }: CardProps) {
  return (
    <motion.div
      className="relative w-full cursor-pointer perspective-1000"
      onClick={() => onClick(link.url)}
      initial={{ scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
      whileHover={{ 
        scale: 1.02,
        rotateX: -10,
        z: 50,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`
        relative overflow-hidden
        bg-zinc-900/90 backdrop-blur-sm
        rounded-2xl p-6
        border border-white/10
        transform preserve-3d
        shadow-[0_0_15px_rgba(0,0,0,0.2)]
        ${link.glow ? 'shadow-[0_0_20px_rgba(255,0,255,0.3)]' : ''}
      `}>
        <div className="flex items-center gap-4">
          <div className={`
            w-10 h-10 rounded-full 
            flex items-center justify-center
            bg-gradient-to-br from-zinc-800 to-zinc-900
            ${link.color || 'text-white'}
          `}>
            {link.icon}
          </div>
          <span className="text-white/90 text-lg font-medium">
            {link.label}
          </span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
        </div>
      </div>
    </motion.div>
  );
} 