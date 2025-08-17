"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Users, Trophy, Star, ArrowRight } from "lucide-react";
import { LandingPageNav } from "@/components/landing-nav"; // Import the new nav
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleGetStarted = () => {
    if (session) {
      router.push("/teacher/dashboard"); // ✅ already logged in
    } else {
      router.push("/login"); // ✅ not logged in
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <LandingPageNav />

      {/* Hero Section (No changes needed here) */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            {/* Left side - Content */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Trusted by 10,000+ educators
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Create Amazing
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Quizzes Instantly
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  Generate engaging, interactive quizzes effortlessly with the
                  power of AI. Perfect for educators, trainers, and content
                  creators.
                </p>

                <div className="flex sm:flex-row gap-4 mb-8">
                  <Button
                    onClick={handleGetStarted} // ✅ use function instead of Link
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Free forever plan</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Hero Image/Illustration */}
            <div className="lg:col-span-6 mt-16 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Main illustration container */}
                <div className="relative bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Mock quiz interface */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-500">Quiz Builder</div>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-700/80 rounded-xl p-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">
                          AI Generated Question
                        </span>
                      </div>

                      <div className="text-lg font-medium">
                        What is the primary function of mitochondria?
                      </div>

                      <div className="space-y-2">
                        {[
                          "Energy production",
                          "Protein synthesis",
                          "DNA storage",
                          "Cell division",
                        ].map((option, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-600 rounded-lg"
                          >
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                            <span>{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Question 1 of 10
                      </div>
                      <div className="w-32 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div className="w-3 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg"
                >
                  <Trophy className="w-6 h-6" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-2xl shadow-lg"
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
