import mongoose from "mongoose";
const recipeSchema = mongoose.Schema(
  {
    name: String,
    recipeId: String,
    likes: { type: Number, default: 0 },
  },
  { collection: "recipes" }
);

 

export default mongoose.model("Recipe", recipeSchema);

 