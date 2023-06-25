import * as dao from "./recipes-dao.js";

export default function RecipeController(app) {
  const findAllRecipes = async (req, res) => {
    const recipes = await dao.findAllRecipes();
    res.json(recipes);
  };
  const findRecipeById = async (req, res) => {
    const id = req.params.id;
    const recipe = await dao.findRecipeById(id);
    res.json(recipe);
  };
  const findRecipeByRecipeId = async (req, res) => {
    const recipeId = req.params.recipeId;
    const recipe = await dao.findRecipeByRecipeId(recipeId);
    res.json(recipe);
  };
  const createRecipe = async (req, res) => {
    const recipe = req.body;
    const newRecipe = await dao.createRecipe(recipe);
    res.json(newRecipe);
  };

  const likeRecipe = async (req, res) => {
    const recipeId = req.params.recipeId;
    const recipe = await dao.findRecipeByRecipeId(recipeId);
    let recipe123 = null;
    if (recipe) {
    recipe.likes = recipe.likes + 1;
      await recipe.save();
      recipe123 = recipe;
    } else {
      const newRecipe = await dao.createRecipe({
        ...req.body,
        likes: 1
      });
      recipe123 = newRecipe;
    }
    // const currentUser = req.session["currentUser"];
    // console.log("req.session", req.session);
    // const userId = currentUser._id;
    // await dao.createLike(recipe123._id, userId);
    res.json(recipe123);
  };

  const findRecipesILike = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const userId = currentUser._id;
    const likes = await dao.findLikesForUser(userId);
    const recipes = likes.map((like) => like.album);
    res.json(recipes);
  };

  app.get("/api/recipes", findAllRecipes);
  app.get("/api/recipes/:id", findRecipeById);
  app.get("/api/recipes/recipeId/:recipeId", findRecipeByRecipeId);
  app.post("/api/recipes", createRecipe);
  app.put("/api/recipes/recipeId/:recipeId/like", likeRecipe);
  app.get("/api/recipes/i/like", findRecipesILike);
}