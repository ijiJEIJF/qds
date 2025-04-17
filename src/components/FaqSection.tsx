"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How does token management work?",
    answer: "Our token management system provides secure storage and organization of your Discord tokens, with advanced features for monitoring and maintaining their health status."
  },
  {
    question: "Is mass messaging safe to use?",
    answer: "Yes, our mass messaging feature includes rate limiting and anti-detection measures to ensure safe operation within Discord's guidelines."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support through Discord, email, and our dedicated support portal. Premium users get priority access to our support team."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing cycle."
  }
];

export default function FaqSection() {
  return (
    <div id="faq" className="py-24 relative">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">
        Frequently Asked Questions
      </h2>
      <p className="text-white/60 text-center mb-16 text-lg">
        Everything you need to know about our services
      </p>

      <div className="max-w-3xl mx-auto space-y-4 px-4">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-blue-400/10 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="flex items-center justify-between px-6 py-4 cursor-pointer list-none bg-blue-600/[0.02] hover:bg-blue-600/[0.06] transition-all duration-300 font-medium text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-white/70 bg-blue-600/[0.01] animate-slide-down">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
