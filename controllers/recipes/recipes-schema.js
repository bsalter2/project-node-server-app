import mongoose from "mongoose";
const recipeSchema = mongoose.Schema(
  {
    name: String,
    recipeId: Number,
    likes: { type: Number, default: 0 },
  },
  { collection: "recipes" }
);

export default recipeSchema;