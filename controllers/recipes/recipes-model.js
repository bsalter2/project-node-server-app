import mongoose from "mongoose";
import recipesSchema from "./recipes-schema.js";
const recipesModel = mongoose.model("recipes", recipesSchema);
export default recipesModel;