var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all users in a <table> */
router.get('/all', function (req, res) {
    db.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayBuddyTable.ejs', {rs: result});
        }
    );
});


/* Create a Buddy*/
// Create User Form
router.get('/create', function(req, res){
    res.render('buddyform.ejs', {action: '/buddy/create'});
});

// Save User to the Database
router.post('/create', function (req, res) {
    db.Insert( req.body, function (err, result) {
            if (err) throw err;

            if(result.Phone_Num != 'undefined') {
                var placeHolderValues = {
                    buddy_name: req.body.buddy_name
                };
                res.render('displayBuddyData.ejs', placeHolderValues);
            }
            else {
                res.send('Buddy was not inserted.');
            }
        }
    );
});

router.get('/', function (req, res) {
    console.log(req.query)
    db.GetPhone_Num(req.query.Phone_Num,
	function(err, result)
	{
	    if(err)
	    {
		throw err;
	    }
	    console.log(result);
	    res.render('displayBuddyInfo.ejs', {rs: result});
			
	}
	);
    
});

module.exports = router;

