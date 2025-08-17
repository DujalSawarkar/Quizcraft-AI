"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ArrowRight, Brain } from "lucide-react";
import { useSession } from "next-auth/react";
import { Spinner } from "./theme/spinner";

export function LandingPageNav() {
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QuizCraft AI
            </span>
          </motion.div>

          {/* Right side - Theme Toggle and Auth Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {status === "loading" && (
              <Button variant="outline" disabled>
                <Spinner />
              </Button>
            )}
            {status === "unauthenticated" && (
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
              >
                <Link href="/teacher/dashboard">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
