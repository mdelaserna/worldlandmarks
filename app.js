// import libraries
var express = require('express'),
    ejs     = require('ejs'),
    connect = require('connect'),
    bodyParser = require('body-parser');

// import routes
var routes = require('./controller/index');
var landmark  = require('./controller/landmark');

// IMPLEMENT THESE
var hotel = require('./controller/hotel');
var restaurant = require('./controller/restaurant');
var buddy = require('./controller/buddy');


// initialize express web application framework
// http://expressjs.com/
var app = express();

// these two lines replace bodyParser()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// configure static directory
app.use(express.static('public'));

//configure view rendering engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// subtitle values access via the header template
app.set('subtitle', 'Your Guide to Travel Destinations');

//configure routes
app.use('/', routes);
app.use('/landmark', landmark);

// added for other tables
app.use('/hotel', hotel);
app.use('/restaurant', restaurant);
app.use('/buddy', buddy);

app.set('port', 8009);
app.listen(app.get('port'));
console.log("Express server listening on port", app.get('port'));
