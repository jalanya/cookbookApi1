import { knex } from './knex';

function runInTransaction(func) {
  return new Promise((resolve, reject) => {
    knex.transaction(async (trx) => {
      try {
        const res = await func(trx);
        await trx.commit();
        resolve(res);
      } catch (error) {
        //call API logger
        await trx.rollback();
        reject(error);
      } finally {
          await trx.destroy();
          console.log("finally...");
      }
    });
  });
}

export { runInTransaction }
