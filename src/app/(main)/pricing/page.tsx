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

const plans = [
  {
    name: "Basic",
    price: "9.99",
    description: "Perfect for getting started with Discord automation",
    features: [
      "5 Discord Tokens",
      "Basic Token Management",
      "Server Join/Leave",
      "Message Sending",
      "Basic Analytics",
      "Email Support"
    ]
  },
  {
    name: "Pro",
    price: "24.99",
    description: "Advanced features for power users",
    features: [
      "25 Discord Tokens",
      "Advanced Token Management",
      "Mass Message Sending",
      "Server Management Tools",
      "Advanced Analytics",
      "Priority Support",
      "Custom Automation"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "49.99",
    description: "Full suite of tools for large-scale operations",
    features: [
      "Unlimited Discord Tokens",
      "Premium Token Management",
      "Advanced Automation",
      "Custom Development",
      "Dedicated Support",
      "API Access",
      "White Label Solution"
    ]
  }
];

export default function Pricing() {
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
              Simple, Transparent
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-white"> Pricing</span>
            </h1>
            <p className="text-[#60A5FA]/80 text-lg max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border ${
                  plan.popular ? 'border-[#60A5FA]' : 'border-white/10'
                } hover:bg-white/10 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#60A5FA] text-white text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl font-bold text-white">$</span>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60">/month</span>
                  </div>
                  <p className="text-white/60 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <svg className="w-5 h-5 text-[#60A5FA] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#60A5FA] text-white hover:bg-[#60A5FA]/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Get Started
                </button>
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