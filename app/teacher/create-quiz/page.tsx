// File: app/teacher/create-quiz/page.tsx

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { File, Users, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Data for the quiz type cards
const quizTypes = [
  {
    title: "Form-Style Quiz",
    description:
      "Students answer questions at their own pace. Ideal for homework and asynchronous assessments.",
    icon: <File className="h-10 w-10 text-primary" />,
    href: "/teacher/create-quiz/form",
    buttonText: "Select",
    isPrimary: true,
  },
  {
    title: "Live Room Quiz",
    description:
      "Engage your class in real-time with a live leaderboard and immediate feedback.",
    icon: <Users className="h-10 w-10 text-primary" />,
    href: "/teacher/create-quiz/live",
    buttonText: "Start Live Quiz",
    isPrimary: true,
  },
];

export default function CreateQuizPage() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center ">
        <Link href="/teacher/dashboard">
          <ArrowLeft className="h-6 w-6 mr-2 mt-1" />
        </Link>
        <h1 className="text-lg font-semibold md:text-2xl">
          Choose a Quiz Type
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-lg p-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quizTypes.map((quiz) => (
              <motion.div
                key={quiz.title}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer h-full"
                onClick={() => router.push(quiz.href)}
              >
                <Card className="h-full flex flex-col justify-between text-left hover:border-primary transition-all duration-300">
                  <CardHeader className="flex-row items-start gap-4">
                    <div className=" flex items-center gap-2 p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full">
                      {quiz.icon}
                      <CardTitle className="text-2xl">{quiz.title}</CardTitle>
                    </div>
                    <div className="flex-1">
                      <CardDescription className="text-base mt-1">
                        {quiz.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity">
                      {quiz.buttonText} <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
