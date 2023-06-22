import likesModel from "./likes-schema.js";
import recipesModel from "./recipes-model.js";

export const findAllRecipes = () => recipesModel.find();
export const findAlbumById = (id) => recipesModel.findById(id);
export const findAlbumByAlbumId = (recipeId) => recipesModel.findOne({ recipeId });
export const createAlbum = (recipe) => recipesModel.create(recipe);

export const createLike = (id, userId) =>
  likesModel.create({ recipe: id, user: userId });

export const findLikesForUser = (userId) =>
  likesModel.find({ user: userId }).populate("recipe").exec();