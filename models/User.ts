// models/User.ts
import mongoose, { Schema, Document, models, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  password?: string;
  role: "student" | "teacher";
  emailVerified?: Date | null;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  password: { type: String },
  role: { type: String, enum: ["student", "teacher"], default: "student" },
  emailVerified: { type: Date, default: null },
});

// Check if the model already exists before defining it
const User = models.User || mongoose.model<IUser>("User", UserSchema);

export default User as Model<IUser>;
