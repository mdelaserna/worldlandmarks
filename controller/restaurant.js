var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all users in a <table> */
router.get('/all', function (req, res) {
    db.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayRestaurantTable.ejs', {rs: result});
        }
    );
});


/* Create a User */
// Create User Form
router.get('/create', function(req, res){
    res.render('restaurantform.ejs', {action: '/restaurant/create'});
});

// Save User to the Database
router.post('/create', function (req, res) {
    db.Insert( req.body, function (err, result) {
            if (err) throw err;

            if(result.Restaurant_ID != 'undefined') {
                var placeHolderValues = {
		    restaurant_name: req.body.restaurant_name,
		    city: req.body.city,
                    country: req.body.country,
                };
                res.render('displayRestaurantData.ejs', placeHolderValues);
            }
            else {
                res.send('Restaurant was not inserted.');
            }
        }
    );
});

router.get('/', function (req, res) {
    console.log(req.query)
    db.GetRestaurant_ID(req.query.Restaurant_ID,
	function(err, result)
	{
	    if(err)
	    {
		throw err;
	    }
	    console.log(result);
	    res.render('displayRestaurantInfo.ejs', {rs: result});
			
	}
	);
    
});

module.exports = router;

