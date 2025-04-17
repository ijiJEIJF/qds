"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex-grow relative flex flex-col items-center justify-center px-4">
        {/* Background dots */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(99, 179, 237, 0.1) 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-7xl sm:text-8xl font-bold tracking-tight text-white"
          >
            FACKED.LOL
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-200/80"
          >
            Custom Card System
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 bg-blue-500/20 hover:bg-blue-500/30 text-blue-100"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 bg-blue-500/20 hover:bg-blue-500/30 text-blue-100"
            >
              View Pricing
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-blue-200/70 hover:text-blue-200 transition-colors">Terms</a>
              <a href="#" className="text-sm text-blue-200/70 hover:text-blue-200 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-blue-200/70 hover:text-blue-200 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm text-blue-200/50">
                © {new Date().getFullYear()} FACKED.LOL - All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
