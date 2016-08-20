import express from 'express';
import bodyParser from 'body-parser';
import recipeCtrl from './models/recipe';

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

router.route('/recipes')
    .get(function(req, res) {
        res.json(recipeCtrl.recipeList);
     });

app.use('/api', router);

app.listen(port);

console.log('Cookbook Api1 on port ' + port);
