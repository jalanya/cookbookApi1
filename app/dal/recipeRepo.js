import { knex } from '../database/knex';
import { runInTransaction } from '../database/factory';

const getRecipeList = async (req, res) => {
    const results = await knex.raw("SELECT id, name, category, chef, ingredients::jsonb, status FROM recipe WHERE status='active'");
    res.send(results.rows);
}

function insertEntity(req) {
  return runInTransaction( async (trx) => {
      const ids = await trx('recipe')
          .insert({
                  name: req.name,
                  category: req.category,
                  chef: req.chef,
                  ingredients: JSON.stringify(req.ingredients),
                  preparation: req.preparation,
                  status: 'active'
                })
          .returning("id");
      return ids;
  });
}

function updateEntity(req) {
  return runInTransaction( async (trx) => {
      const ids = await trx('recipe')
          .where('id', '=', req.id)
          .update({
                  name: req.name,
                  category: req.category,
                  chef: req.chef,
                  ingredients: JSON.stringify(req.ingredients),
                  preparation: req.preparation
                })
          .returning("id");
      return ids;
  });
}

function deleteEntity(id) {
  return runInTransaction( async (trx) => {
      const ids = await trx('recipe')
          .where('id', '=', id)
          .update({
                  status: 'deleted'
                })
          .returning("id");
      return ids;
  });
}

export {
  getRecipeList,
  insertEntity,
  updateEntity,
  deleteEntity
};
