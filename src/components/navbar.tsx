"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/status", label: "Status" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-300/20 animate-gradient" />
          
          {/* Glassmorphism effect on scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            className="absolute inset-0 rounded-2xl bg-[#0a192f]/80 backdrop-blur-sm shadow-lg"
          />

          <div className="relative flex h-14 items-center justify-between px-4 md:px-6">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/" className="flex items-center">
                <motion.span
                  className="text-xl md:text-2xl font-bold"
                  style={{
                    background: "linear-gradient(to right, #60A5FA, #93C5FD, #BFDBFE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  FACKED.LOL
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-1.5 rounded-lg text-blue-200/90 hover:text-blue-100 hover:bg-white/5 transition-all text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href="/dashboard"
                  className="ml-2 px-4 py-1.5 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 transition-all border border-blue-400/20 hover:border-blue-400/40 shadow-lg shadow-blue-500/20 text-sm font-medium"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative group"
            >
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all ring-0 hover:ring-2 ring-blue-400/30 bg-white/5 hover:bg-white/10">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <motion.div
                    animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                    className="bg-blue-200 h-[2px] w-7 transform transition-all duration-300"
                  />
                  <motion.div
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="bg-blue-200 h-[2px] w-7 rounded transform transition-all duration-300"
                  />
                  <motion.div
                    animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                    className="bg-blue-200 h-[2px] w-7 transform transition-all duration-300"
                  />
                </div>
              </div>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative overflow-hidden rounded-2xl bg-[#0a192f]/95 backdrop-blur-lg border border-white/10 shadow-xl"
            >
              <div className="p-4">
                <div className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className="block w-full px-4 py-2 text-blue-200/90 hover:text-blue-100 hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menuItems.length * 0.1 }}
                    className="pt-2"
                  >
                    <Link
                      href="/dashboard"
                      className="block w-full py-2 px-4 text-center rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 transition-all border border-blue-400/20 hover:border-blue-400/40 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Add this to your global CSS file
const styles = `
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  animation: gradient 8s linear infinite;
  background-size: 200% 200%;
}
`;
