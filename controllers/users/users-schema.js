import mongoose from "mongoose";
import recipeSchema  from "../recipes/recipes-schema.js";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user", "influencer"],
      default: "user",
      required: true,
    },
    likes: {
      type: [Number],
      unique: true,
    },
    followers: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
      unique: true,
    },
    followings: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
      unique: true,
    },
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    bio: String,
  },
  { collection: "users" }
);
export default usersSchema;
