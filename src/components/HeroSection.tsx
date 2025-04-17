"use client";

import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center relative">
      <div className="animate-float flex items-center gap-4 mb-12">
        <Link
          className="bg-gradient-to-r from-blue-600/[0.05] to-blue-600/[0.15] px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-sm hover:from-blue-600/[0.1] hover:to-blue-600/[0.25] transition-all duration-500 border border-blue-400/10 group"
          href="https://discord.gg/facked.lol"
        >
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-glow-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500/50 animate-ping"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500/30 animate-pulse"></div>
          </div>
          <span className="text-sm text-white/90 group-hover:text-white transition-colors">discord.gg/facked.lol</span>
        </Link>
      </div>

      <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-blue-100/80 animate-fade-up tracking-tighter">
        FACKED.LOL
      </h1>

      <p className="text-white/60 text-base sm:text-lg md:text-xl mb-12 max-w-3xl animate-fade-up leading-relaxed px-4">
        Advanced Discord automation with powerful token management,
        mass messaging and server tools
      </p>

      <div className="flex flex-col sm:flex-row gap-6 animate-fade-up">
        <Link
          className="group relative px-8 py-4 overflow-hidden rounded-xl border border-white/20 hover:scale-105 transition-all duration-300"
          href="/register"
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 transition-opacity duration-500"></span>
          <span className="relative font-medium flex items-center justify-center gap-2">Get Started</span>
        </Link>

        <Link
          className="group relative px-8 py-4 overflow-hidden rounded-xl border border-white/20 hover:scale-105 transition-all duration-300"
          href="#pricing"
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 transition-opacity duration-500"></span>
          <span className="relative font-medium flex items-center justify-center gap-2">View Pricing</span>
        </Link>
      </div>
    </div>
  );
}
