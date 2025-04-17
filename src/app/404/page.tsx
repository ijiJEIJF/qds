"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white">
      <div className="relative">
        {/* Stars background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
              backgroundSize: '15px 15px'
            }}
          />
        </div>
        
        {/* Shooting stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-shooting-star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: '2px',
                height: '2px',
                background: 'white',
                boxShadow: '0 0 4px white',
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative z-10"
        >
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl mb-6">Pagina Non Trovata</h2>
          <p className="text-gray-400 mb-8">La pagina che stai cercando non esiste.</p>
          <Link 
            href="/"
            className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Torna alla Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 