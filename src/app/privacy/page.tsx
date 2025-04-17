"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including your name, email address, and any other information you choose to provide when using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect facked.lol and our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not share your personal information with third parties except as described in this policy. We may share information with service providers who assist us in operating our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
            <p className="mb-4">
              You may update, correct, or delete your account information at any time by logging into your account or contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
} 