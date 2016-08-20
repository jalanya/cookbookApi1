import recipe from '../models/recipe';

function list(req, res, next) {
    console.log(recipe.recipeList);
   return recipe.recipeList;
}

export default { list };
