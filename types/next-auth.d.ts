import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the default JWT type
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "student" | "teacher";
  }
}

// Extend the default Session and User types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "student" | "teacher";
    } & DefaultSession["user"]; // Keep the default user properties
  }

  interface User extends DefaultUser {
    role: "student" | "teacher";
  }
}
