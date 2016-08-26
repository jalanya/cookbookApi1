import knexBuilder from 'knex';
import knexConfig from './knexfile.js';

let knex;

export default {
  get knex() {
    if (!knex) {
      knex = knexBuilder(knexConfig.pg);
    }
    return knex;
  },
};
