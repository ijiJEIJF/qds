"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      router.push("/dashboard");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500 selection:text-white scroll-smooth">
      <Navbar />
      <Background />

      <main className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-white/60">Log in to your FACKED.LOL account</p>
          </div>

          <div className="bg-blue-900/20 backdrop-blur-lg rounded-2xl border border-blue-400/10 p-8 shadow-xl">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-white/80">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 flex justify-center items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : null}
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-400 hover:text-blue-300">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-white/40 text-sm">
            <p>By logging in, you agree to our <Link href="/terms" className="underline hover:text-white/60">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-white/60">Privacy Policy</Link>.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
