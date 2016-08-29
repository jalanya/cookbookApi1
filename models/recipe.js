import { knex } from '../database/knex';

const getRecipeList = async (req, res) => {
    const results = await knex.raw("SELECT id, name, category, chef, ingredients::jsonb, status FROM recipe WHERE status='active'");
    console.log(results.rows);
    res.send(results.rows);
}

const insertRecipe = async (req) => {
    return new Promise((resolve, reject) => {
        knex.transaction(async (trx) => {
        try {
            let ids = await trx('recipe')
                .insert({
                        name: req.name,
                        category: req.category,
                        chef: req.chef,
                        ingredients: JSON.stringify(req.ingredients),
                        preparation: req.preparation,
                        status: 'active'
                      })
                .returning("id");

            await trx.commit();

            resolve(ids);

        } catch(error) {
            await trx.rollback();
            reject(error);
            console.log("rollback...");
        } finally {
            await trx.destroy();
            console.log("finally...");
        }
    });
  });
};

const updateRecipe = async (req) => {
    return new Promise((resolve, reject) => {
        knex.transaction(async (trx) => {
        try {
            let ids = await trx('recipe')
                .where('id', '=', req.id)
                .update({
                        name: req.name,
                        category: req.category,
                        chef: req.chef,
                        ingredients: JSON.stringify(req.ingredients),
                        preparation: req.preparation
                      })
                .returning("id");

            await trx.commit();

            resolve(ids);

        } catch(error) {
            await trx.rollback();
            reject(error);
            console.log("rollback...");
        } finally {
            await trx.destroy();
            console.log("finally...");
        }
    });
  });
};

const deleteRecipe = async (id) => {
    return new Promise((resolve, reject) => {
        knex.transaction(async (trx) => {
        try {
            let ids = await trx('recipe')
                .where('id', '=', id)
                .update({
                        status: 'deleted'
                      })
                .returning("id");

            await trx.commit();

            resolve(ids);

        } catch(error) {
            await trx.rollback();
            reject(error);
            console.log("rollback...");
        } finally {
            await trx.destroy();
            console.log("finally...");
        }
    });
  });
};

export {
  getRecipeList,
  insertRecipe,
  updateRecipe,
  deleteRecipe
};
