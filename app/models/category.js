import * as dal from '../dal/categoryRepo';

const getAllCategories = async (req, res) => {
    let categories =  await dal.getCategoryList(req, res);
    res.json(categories);
}

export { getAllCategories };
