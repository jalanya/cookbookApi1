import express from 'express';
import bodyParser from 'body-parser';
import recipeRouter from './app/routes/recipeRouter';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.PORT || 8082;
let router = express.Router();

//middleware to use for all requests.
router.use(function(req, res, next) {
    console.log('Something is happing.');
    next();
});

router.get('/', function (req, res) {
          res.json({message: 'Welcome to our Cookbook Api 1'});
      });

app.use('/', router);
app.use('/api', recipeRouter);

app.listen(port);

console.log('Cookbook Api 1 on port ' + port);

export default app;
