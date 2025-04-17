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

const services = [
  {
    name: "API Server",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "None"
  },
  {
    name: "Discord Bot",
    status: "operational",
    uptime: "99.95%",
    lastIncident: "3 days ago"
  },
  {
    name: "Token Manager",
    status: "operational",
    uptime: "99.98%",
    lastIncident: "7 days ago"
  },
  {
    name: "Message Service",
    status: "operational",
    uptime: "99.97%",
    lastIncident: "2 days ago"
  },
  {
    name: "Server Tools",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "None"
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "None"
  }
];

const incidents = [
  {
    date: "2024-03-15",
    title: "Minor API Latency",
    description: "Experienced elevated response times for 15 minutes. Issue resolved.",
    status: "resolved"
  },
  {
    date: "2024-03-13",
    title: "Discord Bot Sync Delay",
    description: "Short delay in bot synchronization. Systems recovered automatically.",
    status: "resolved"
  },
  {
    date: "2024-03-10",
    title: "Database Maintenance",
    description: "Scheduled maintenance completed successfully.",
    status: "resolved"
  }
];

export default function Status() {
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
              System
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-white"> Status</span>
            </h1>
            <p className="text-[#60A5FA]/80 text-lg max-w-2xl mx-auto">
              Current status of all FACKED.LOL services
            </p>
          </motion.div>

          {/* Status Overview */}
          <motion.div variants={item} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
                <h2 className="text-2xl font-semibold text-white">All Systems Operational</h2>
              </div>
              <p className="text-[#60A5FA]/80">
                Updated 2 minutes ago
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-green-400 text-sm">Operational</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Uptime</span>
                      <span className="text-white">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Last Incident</span>
                      <span className="text-white">{service.lastIncident}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Incidents */}
          <motion.div variants={item}>
            <h2 className="text-2xl font-semibold text-white mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{incident.title}</h3>
                      <p className="text-[#60A5FA]/80 text-sm">{incident.description}</p>
                    </div>
                    <span className="text-sm text-white/60">{incident.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-green-400 text-sm capitalize">{incident.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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