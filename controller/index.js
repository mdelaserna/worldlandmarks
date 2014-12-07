var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

// Return the text Hello, World!.
router.get('/hello', function(req, res){
    res.send('Hello, World!');
});

/* index file that links to various examples */
router.get('/', function(req, res){
    // use render instead of send, to replace the placeholders in index.ejs with the Key Value Pairs (KVP).
    res.render('index');
});

// Landmark
/* Example 1 - HTML Form w/o Ajax or Database Interaction */
router.get('/landmarkForm', function(req, res){
    res.render('landmarkform.ejs', {action: '/displayLandmarkData'});
});

/* Example 1 - Display form data submitted above */
router.post('/displayLandmarkData', function(req, res) {
    console.log(req.body);
    res.render('displayLandmarkData.ejs', req.body );
});

// Buddy
/* Example 1 - HTML Form w/o Ajax or Database Interaction */
router.get('/buddyForm', function(req, res){
    res.render('buddyform.ejs', {action: '/displayBuddyData'});
});

/* Example 1 - Display form data submitted above */
router.post('/displayBuddyData', function(req, res) {
    console.log(req.body);
    res.render('displayBuddyData.ejs', req.body );
});

// Hotel 
/* Example 1 - HTML Form w/o Ajax or Database Interaction */
router.get('/hotelForm', function(req, res){
    res.render('hotelform.ejs', {action: '/displayHotelData'});
});

/* Example 1 - Display form data submitted above */
router.post('/displayHotelData', function(req, res) {
    console.log(req.body);
    res.render('displayHotelData.ejs', req.body );
});

// Restaurant
/* Example 1 - HTML Form w/o Ajax or Database Interaction */
router.get('/restaurantForm', function(req, res){
    res.render('restaurantform.ejs', {action: '/displayRestaurantData'});
});

/* Example 1 - Display form data submitted above */
router.post('/displayRestaurantData', function(req, res) {
    console.log(req.body);
    res.render('displayRestaurantData.ejs', req.body );
});

module.exports = router;

