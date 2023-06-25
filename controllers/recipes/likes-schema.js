import mongoose from "mongoose";
const likesSchema = mongoose.Schema(
  {
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: "recipes" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "likes" }
);

 

export default mongoose.model("Likes", likesSchema);