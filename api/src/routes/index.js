const { Router } = require("express");
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { API_KEY, API_KEYS } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getRecipesFromApi = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEYS}&addRecipeInformation=true`
  );
  //   console.log(await apiUrl.data.results.analyzedInstructions);
  const info = await apiUrl.data.results.map((e) => {
    return {
      id: e.id,
      name: e.title,
      dishRes: e.summary,
      dishScore: e.spoonacularScore,
      healthyScore: e.healthScore,
      stepByStep: e.analyzedInstructions.map((e) =>
        e.steps.map((el) => el.step)
      ),
      img: e.image,
      diets: e.diets,
    };
  });
  return info;
};

const getRecipesFromDb = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllRecipes = async () => {
  const recipesFromApi = await getRecipesFromApi();
  const recipesFromDb = await getRecipesFromDb();
  const allRecipes = recipesFromApi.concat(recipesFromDb);
  return allRecipes;
};

const getAllDiets = async () => {
  const diets = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto ovo vegetarian",
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "fodmap friendly",
    "dairy free",
    "whole 30",
  ];
  diets.forEach((e) => {
    Diet.findOrCreate({
      where: { name: e },
    });
  });
  const dietTypes = await Diet.findAll();
  // console.log(dietTypes);
  return dietTypes ;
};

// const getRecipesByQuery
// const getRecipesByParams
// const getTypesOfRecipes
// const PostRecipe
router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  let recipes = await getAllRecipes();
  if (name) {
    let queryRecipe = await recipes.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    if (queryRecipe.length) {
      res.status(200).send(queryRecipe);
    } else {
      res.status(404).send("Esta receta no existe");
    }
  } else {
    res.status(200).send(recipes);
  }
});

router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  let recipes = await getAllRecipes();
  //   console.log(recipes)
  let paramsRecipe = await recipes.find((e) => Number(e.id) === Number(id));
  // console.log(paramsRecipe);
  if (paramsRecipe) {
    res.status(200).send(paramsRecipe);
  } else {
    res.status(404).send("Esta receta no existe");
  }
});

router.get("/types", async (req, res) => {
  let types = await getAllDiets();
  res.status(200).send(types);
});

router.post("/recipe", async (req, res) => {
  const { name, dishRes, dishScore, healthyScore, stepByStep, img, diets } =
    req.body;
  console.log('este ese el consolelog!!!!!!!' ,diets)
  let createdRecipe = await Recipe.create({
    name,
    dishRes,
    dishScore,
    healthyScore,
    stepByStep,
    img,
  });
  let recipeDiet = await Diet.findAll({
    where: { name: diets },
  });

  createdRecipe.addDiet(recipeDiet);
  console.log(createdRecipe);
  res.status(200).send("recipe added successfully");
});

// GET /recipes
// GET /recipes/{idReceta}
// GET /types
// POST /recipe

module.exports = router;
