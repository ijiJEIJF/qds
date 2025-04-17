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

export default function Dashboard() {
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
            <div className="inline-block p-4 bg-[#60A5FA]/10 rounded-full mb-6">
              <svg className="w-16 h-16 text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dashboard Under
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-white"> Maintenance</span>
            </h1>
            <p className="text-[#60A5FA]/80 text-lg max-w-2xl mx-auto mb-8">
              We're working hard to bring you an amazing dashboard experience. Please check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#60A5FA] text-white rounded-lg font-medium hover:bg-[#60A5FA]/90 transition-colors"
              >
                Check Status
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={item} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">What's Coming</h3>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#60A5FA] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced Token Management
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#60A5FA] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                    Real-time Analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#60A5FA] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                    Custom Automation Tools
                  </li>
                </ul>
                            </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Estimated Time</h3>
                <div className="text-4xl font-bold text-white mb-4">24 Hours</div>
                <p className="text-white/60">
                  We're working around the clock to bring you the best experience possible.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-white/60 mb-4">
                  Follow us on social media for the latest updates and announcements.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-[#60A5FA] hover:text-[#60A5FA]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#60A5FA] hover:text-[#60A5FA]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                  </a>
                  <a href="#" className="text-[#60A5FA] hover:text-[#60A5FA]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                              </svg>
                  </a>
                </div>
              </div>
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