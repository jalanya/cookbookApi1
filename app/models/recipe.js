import * as dal from '../dal/recipeRepo';

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
        result =  await dal.insertEntity(req.body);
      else
        result =  await dal.updateEntity(req.body);

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

      let result =  await dal.deleteEntity(req.params.id);

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

export { getAllRecipes, saveRecipe, removeRecipe };
