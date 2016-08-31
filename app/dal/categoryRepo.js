import { knex } from '../database/knex';

const getCategoryList = async (req, res) => {
    const results = await knex.raw("SELECT id, name FROM categories");
    res.send(results.rows);
}

export {
  getCategoryList
};
