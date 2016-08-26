import { knex } from '../database/knex';

const getRecipeList = async (req, res) => {
    const results = await knex.raw('SELECT id, name FROM recipe');
    res.send(results.rows);
}

let getRecipeList2 =  async (req, res) => {
    let qr = await knex.from('recipe')
        .orderByRaw('id DESC')
        .select();
    res.json(qr);
};

export {
  getRecipeList, getRecipeList2
};
