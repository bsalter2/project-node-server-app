import likesModel from "./likes-schema.js";
import recipesModel from "./recipes-model.js";

export const findAllRecipes = () => recipesModel.find();
export const findrRecipeById = (id) => recipesModel.findById(id);
export const findRecipeByRecipeId = (recipeId) => recipesModel.findOne({ recipeId });
export const createRecipe = (recipe) => recipesModel.create(recipe);

export const createLike = (id, userId) =>
  likesModel.create({ recipe: id, user: userId });

export const findLikesForUser = (userId) =>
  likesModel.find({ user: userId }).populate("recipe").exec();