import express from 'express';
import bodyParser from 'body-parser';
import * as dal from './models/recipe';

const getAllRecipes = async (req, res) => {
    var recipes =  await dal.getRecipeList2(req, res);
    res.json(recipes);
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8082;
let router = express.Router();

//middleware to use for all requests.
router.use(function(req, res, next) {
    console.log('Something is happing.');
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'Welcome to our Cookbook Api1'});
});

router.route('/recipes').get(getAllRecipes);

app.use('/api', router);

app.listen(port);

console.log('Cookbook Api1 on port ' + port);

export default app;
