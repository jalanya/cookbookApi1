import express from 'express';
import { getAllCategories } from '../models/category';

let categoryRouter = express.Router();

categoryRouter.route('/categories')
              .get(getAllCategories)

export default categoryRouter;
