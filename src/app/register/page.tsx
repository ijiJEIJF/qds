"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous errors
    setError("");

    // Basic validation
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy");
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
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-white/60">Join FACKED.LOL and get started today</p>
          </div>

          <div className="bg-blue-900/20 backdrop-blur-lg rounded-2xl border border-blue-400/10 p-8 shadow-xl">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="username" className="block text-sm font-medium text-white/80 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6 flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    className="w-4 h-4 bg-blue-950 border border-blue-400/20 rounded focus:ring-blue-500 focus:ring-2"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="agreeTerms" className="ml-2 text-sm text-white/60">
                  I agree to the <Link href="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link> and <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 flex justify-center items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : null}
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-400 hover:text-blue-300">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
