"use client";

import React from 'react';

const PricingCard = ({
  title,
  price,
  features,
  isRecommended = false
}: {
  title: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
}) => {
  return (
    <div className={`relative rounded-2xl p-8 sm:p-10 backdrop-blur-sm transition-all duration-500 hover:transform hover:-translate-y-2 group ${isRecommended ? 'bg-blue-600/10 text-white border-2 border-blue-400/20 shadow-2xl shadow-blue-500/5' : 'bg-blue-600/[0.02] border border-blue-400/10 hover:bg-blue-600/[0.06]'}`}>
      {isRecommended && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600/20 text-white text-sm px-6 py-2 rounded-full font-medium border border-blue-400/20">
          Recommended
        </span>
      )}
      <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3>
      <div className="mb-8">
        <span className="text-4xl sm:text-5xl font-bold">{price}</span>
        <span className="text-white/60">/month</span>
      </div>
      <ul className="space-y-4 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-lg text-white">✓</span>
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-xl transition-all duration-500 group relative overflow-hidden transform hover:scale-[1.02] border border-blue-400/20 ${isRecommended ? 'bg-blue-600/20' : 'bg-blue-600/5'} text-white`}>
        <span className="relative z-10 font-medium">Purchase Now</span>
      </button>
    </div>
  );
};

export default function PricingSection() {
  return (
    <div id="pricing" className="py-24 relative">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">
        Choose Your Plan
      </h2>
      <p className="text-white/60 text-center mb-20 text-lg">
        Select the perfect plan for your needs
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 max-w-7xl mx-auto px-4">
        <PricingCard
          title="Basic"
          price="$9.99"
          features={[
            "Basic Token Management",
            "Server Analytics",
            "24/7 Support"
          ]}
        />

        <PricingCard
          title="Pro"
          price="$24.99"
          features={[
            "Advanced Token Management",
            "Mass Messaging",
            "Premium Support",
            "Custom Features"
          ]}
          isRecommended={true}
        />

        <PricingCard
          title="Enterprise"
          price="$49.99"
          features={[
            "Unlimited Tokens",
            "Priority Support",
            "Custom Development",
            "API Access"
          ]}
        />
      </div>
    </div>
  );
}
