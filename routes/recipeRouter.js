import express from 'express';
import knex from 'knex';
import * as dal from '../models/recipe';

const getAllRecipes = async (req, res) => {
    let recipes =  await dal.getRecipeList(req, res);
    res.json(recipes);
}

const addRecipe = async (req, res) => {

    let recipe = {id:0,
                name: req.body.name,
                category: req.body.category,
                chef: req.body.chef,
                ingredients: req.body.ingredients,
                preparation: req.body.preparation,
                status: 'active'
    }
    try {
      let result =  await dal.insertRecipe(req.body);
      recipe.id = result[0];

    }catch(err) {
      console.log("Error: " + err);
    }

    let responseMessage = {message: 'success',
                             data: recipe
                          };

    console.log("responseMessage : " + responseMessage);

    res.json(responseMessage);
}


let recipeRouter = express.Router();

recipeRouter.route('/recipes')
              .get(getAllRecipes)
              .post(addRecipe);

export default recipeRouter;
