var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all users in a <table> */
router.get('/all', function (req, res) {
    db.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayLandmarkTable.ejs', {rs: result});
        }
    );
});

/* View about page */
router.get('/about', function(req, res) {
    res.render('displayAboutPage.ejs', {action: '/landmark/about'});
});

/* Create a User */
// Create User Form
router.get('/create', function(req, res){
    res.render('landmarkform.ejs', {action: '/landmark/create'});
});

// Save User to the Database
router.post('/create', function (req, res) {
    db.Insert( req.body, function (err, result) {
            if (err) throw err;

            if(result.Landmark_ID != 'undefined') {
                var placeHolderValues = {
		    landmark_name: req.body.landmark_name,
                    city: req.body.city,
                    country: req.body.country,
                    type_name: req.body.type_name
                };
                res.render('displayLandmarkData.ejs', placeHolderValues);
            }
            else {
                res.send('Landmark was not inserted.');
            }
        }
    );
});

router.get('/', function (req, res) {
    console.log(req.query)
    db.GetLandmark_ID(req.query.Landmark_ID,
	function(err, result)
	{
	    if(err)
	    {
		throw err;
	    }
	    console.log(result);
	    res.render('displayLandmarkInfo.ejs', {rs: result});
			
	}
	);
    
});

/* Dropdown */
router.get('/dropdown', function(req, res) {
    db.GetAllView(function(err, result) {
	if(err) throw err;
	res.render('displayLandmarkDropDown.ejs', {rs: result});
	}
    );
});


router.post('/view', function (req, res) {
    db.GetByID( req.body, function (err, result) {
            if (err) {
                throw err;
            }
	//result[0].Landmark_ID
            else if(typeof result[0].Landmark_Name === 'undefined'){
                res.send('That landmark does not exists in the database.');
            }
            else {
                var placeHolderValues = {
                    landmark_name: result[0].Landmark_Name,
                    city: result[0].City,
		    country: result[0].Country,
		    type_name: result[0].Type_Name
                };
                res.render('displayLandmarkInfo.ejs', placeHolderValues);
            }
        }
    );
});

module.exports = router;

