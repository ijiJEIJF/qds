"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Terms of Service
        </h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using facked.lol, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily use facked.lol for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
            <p className="mb-4">
              You are responsible for all content you post on facked.lol. We reserve the right to remove any content that violates our terms or is otherwise objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
            <p className="mb-4">
              Your use of facked.lol is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
            <p className="mb-4">
              The materials on facked.lol are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitations</h2>
            <p className="mb-4">
              In no event shall facked.lol or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on facked.lol.
            </p>
          </section>
        </div>
      </motion.div>
    </main>
  );
} 