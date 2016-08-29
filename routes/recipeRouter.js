import express from 'express';
import knex from 'knex';
import * as dal from '../models/recipe';

const getAllRecipes = async (req, res) => {
    let recipes =  await dal.getRecipeList(req, res);
    res.json(recipes);
}

const saveRecipe = async (req, res) => {

    let id = 0;

    if (req.body.id > 0)
        id = req.body.id;

    let recipe = {id,
                name: req.body.name,
                category: req.body.category,
                chef: req.body.chef,
                ingredients: req.body.ingredients,
                preparation: req.body.preparation,
                status: 'active'
    }
    try {

      let result;

      if (id === 0)
        result =  await dal.insertRecipe(req.body);
      else
        result =  await dal.updateRecipe(req.body);

      recipe.id = result[0];

    } catch(err) {
      console.log("Error: " + err);
    }

    let responseMessage = {message: 'success',
                             data: recipe
                          };

    console.log("responseMessage : " + responseMessage);

    res.json(responseMessage);
}

const removeRecipe = async (req, res) => {

    let recipe = {id: req.params.id}

    let responseMessage = {message: 'success', data:[]}

    try {

      let result =  await dal.deleteRecipe(req.params.id);

      recipe.id = result[0];

    } catch(err) {
      console.log("Error: " + err);
      responseMessage = {
                          message: 'Error: ' + err,
                          data: recipe
                        };
    } finally {
      responseMessage = {
                          message: 'success',
                          data: recipe
                        };
    }

    console.log("responseMessage : " + responseMessage);

    res.json(responseMessage);
}


let recipeRouter = express.Router();

recipeRouter.route('/recipes')
              .get(getAllRecipes)
              .post(saveRecipe);

recipeRouter.route('/recipes/:id')
              .delete(removeRecipe);

export default recipeRouter;
