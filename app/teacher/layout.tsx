"use client"; // Add this because we are using hooks (usePathname)

import { ReactNode } from "react";
import {
  Home,
  LineChart,
  Menu,
  Package2,
  Settings,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Button } from "@/components/ui/button";
import { UserNav } from "@/components/teacher/user-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils"; // Make sure you have this utility from Shadcn

// Define navigation items in an array for easy management
const navItems = [
  { href: "/teacher/dashboard", icon: Home, label: "Dashboard" },
  { href: "/teacher/quizzes", icon: BookOpen, label: "My Quizzes" },
  { href: "/teacher/analytics", icon: LineChart, label: "Analytics" },
  { href: "/teacher/settings", icon: Settings, label: "Settings" },
];

export default function TeacherLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // Get the current path

  const NavLinks = () => (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            pathname === item.href && "bg-muted text-primary" // Active link style
          )}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="/teacher/dashboard"
              className="flex items-center gap-2 font-semibold"
            >
              <Package2 className="h-6 w-6 text-primary" />
              <span>QuizCraft AI</span>
            </Link>
          </div>
          <div className="flex-1">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Mobile Header and Main Content */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* Mobile Navigation Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex h-14 items-center border-b px-4">
                <Link
                  href="/teacher/dashboard"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Package2 className="h-6 w-6 text-primary" />
                  <span>QuizCraft AI</span>
                </Link>
              </div>
              <NavLinks />
            </SheetContent>
          </Sheet>

          <div className="w-full flex-1">
            {/* You can add a search bar here if needed */}
          </div>
          <UserNav />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
