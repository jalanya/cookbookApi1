var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var recipe = require('./models/recipe');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8082;
var router = express.Router();

//
var recipeList = [
        {
          id: 1,
          name: 'Ceviche',
          category: 'Meat',
          categoryTag: 'meat',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1',
                        quantity: '1 Kg'
                      },
                      {
                        name:'ingre 2',
                        quantity: '1 Kg'
                      }
                    ],
        preparation: '', status: 'active'
        },
        {
          id: 2,
          name: 'Anticucho',
          category: 'Meat',
          categoryTag: 'meat',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '2 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '2 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 3,
          name: 'Arroz con Pollo',
          category: 'meat',
          categoryTag: 'meat',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '3 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '3 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 4,
          name: 'Recipe 4',
          category: 'Pastas',
          categoryTag: 'pastas',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '4 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '4 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 5,
          name: 'Recipe 5',
          category: 'Pastas',
          categoryTag: 'pastas',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '5 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '5 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 6,
          name: 'Recipe 6',
          category: 'Pastas',
          categoryTag: 'pastas',
          chef: 'Roger Rabbit',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '6 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '6 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 7,
          name: 'Recipe 7',
          category: 'Salads',
          categoryTag: 'salads',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '7 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '7 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 8,
          name: 'Recipe 8',
          category: 'salads',
          categoryTag: 'salads',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1',
                        quantity: '8 Kg'
                      },
                      {
                        name:'ingre 2',
                        quantity: '8 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 9,
          name: 'Recipe 9',
          category: 'salads',
          categoryTag: 'salads',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '9 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '9 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 10,
          name: 'Recipe 10',
          category: 'Desserts',
          categoryTag: 'desserts',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '10 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '10 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 11,
          name: 'Recipe 11',
          category: 'Desserts',
          categoryTag: 'desserts',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '11 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '11 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        },
        {
          id: 12,
          name: 'Recipe 12',
          category: 'desserts',
          categoryTag: 'desserts',
          chef: 'Gaston',
          ingredients : [
                      {
                        name:'ingre 1', quantity: '12 Kg'
                      },
                      {
                        name:'ingre 2', quantity: '12 Kg'
                      }
                    ],
          preparation: '',
          status: 'active',
          editing: false
        }
      ];

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
        res.json(recipeList);
     });

app.use('/api', router);

app.listen(port);

console.log('Cookbook Api1 on port ' + port);
