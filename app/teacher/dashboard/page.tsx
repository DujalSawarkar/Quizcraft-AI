import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function TeacherDashboard() {
  // Mock data for quizzes - later this will come from your database
  const quizzes = [
    {
      id: 1,
      title: "Biology 101: Cell Structure",
      questions: 15,
      status: "Published",
    },
    { id: 2, title: "History of Ancient Rome", questions: 20, status: "Draft" },
    { id: 3, title: "Algebra Basics", questions: 25, status: "Published" },
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">My Dashboard</h1>
        <Button
          asChild
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
        >
          <Link href="/teacher/create-quiz">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create New Quiz
          </Link>
        </Button>
      </div>

      {/* Main Content: Quiz List */}
      <div className="flex flex-1 items-start justify-center rounded-lg border border-dashed shadow-sm p-4">
        <div className="w-full">
          {quizzes.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {quizzes.map((quiz) => (
                <Card key={quiz.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {quiz.title}
                    </CardTitle>
                    <CardDescription>
                      {quiz.questions} Questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          quiz.status === "Published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {quiz.status}
                      </span>
                      <Button variant="outline" size="sm">
                        View Results
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no quizzes yet
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get started by creating your first quiz.
              </p>
              <Button asChild>
                <Link href="/teacher/create-quiz">Create Quiz</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
