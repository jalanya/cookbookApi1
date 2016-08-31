import express from 'express';
import * as ctrl from '../models/recipe';

let recipeRouter = express.Router();

recipeRouter.route('/recipes')
              .get(ctrl.getAllRecipes)
              .post(ctrl.saveRecipe);

recipeRouter.route('/recipes/:id')
              .delete(ctrl.removeRecipe);

export default recipeRouter;
