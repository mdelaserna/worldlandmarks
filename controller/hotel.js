var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all users in a <table> */
router.get('/all', function (req, res) {
    db.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayHotelTable.ejs', {rs: result});
        }
    );
});


/* Create a User */
// Create User Form
router.get('/create', function(req, res){
    res.render('hotelform.ejs', {action: '/hotel/create'});
});

// Save User to the Database
router.post('/create', function (req, res) {
    db.Insert( req.body, function (err, result) {
            if (err) throw err;

            if(result.Hotel_ID != 'undefined') {
                var placeHolderValues = {
		    hotel_name: req.body.hotel_name,
                    room_rate: req.body.room_rate,
		    city: req.body.city,
                    country: req.body.country,
                };
                res.render('displayHotelData.ejs', placeHolderValues);
            }
            else {
                res.send('Hotel was not inserted.');
            }
        }
    );
});

router.get('/', function (req, res) {
    console.log(req.query)
    db.GetHotel_ID(req.query.Hotel_ID,
	function(err, result)
	{
	    if(err)
	    {
		throw err;
	    }
	    console.log(result);
	    res.render('displayHotelInfo.ejs', {rs: result});
			
	}
	);
    
});

module.exports = router;

