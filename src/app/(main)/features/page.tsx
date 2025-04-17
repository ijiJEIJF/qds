"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

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

const features = [
  {
    title: "Token Management",
    description: "Securely manage and organize your Discord tokens with advanced encryption and organization features.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Mass Messaging",
    description: "Send messages to multiple channels and users efficiently with customizable templates and scheduling.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    title: "Server Tools",
    description: "Powerful tools for server management, including member management, role assignment, and channel organization.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Automation",
    description: "Create custom automation workflows for repetitive tasks and server management operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Analytics",
    description: "Detailed analytics and insights about your Discord servers, members, and message engagement.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Security",
    description: "Advanced security features including IP rotation, proxy support, and token protection mechanisms.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function Features() {
  const [stars, setStars] = useState<Array<{
    top: string;
    left: string;
    delay: string;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const newStars = Array(20).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[#0B1622]" />
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Glow Effects */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#60A5FA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#60A5FA]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        
        <motion.main 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-grow container mx-auto px-4 py-16"
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

          <motion.div variants={item} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-white"> Discord Automation</span>
            </h1>
            <p className="text-[#60A5FA]/80 text-lg max-w-2xl mx-auto">
              Discover our comprehensive suite of tools designed to enhance your Discord experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#60A5FA]/10 rounded-lg text-[#60A5FA]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/60">{feature.description}</p>
                <div className="absolute inset-0 rounded-xl bg-[#60A5FA]/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.main>

        {/* Footer */}
        <div className="relative mt-auto border-t border-white/5">
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