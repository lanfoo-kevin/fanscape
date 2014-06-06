// server.js

// set up ======================================================================
var express           = require('express');
var app               = express();
var port              = process.env.PORT || 3000;
var morgan            = require('morgan');
var bodyParser        = require('body-parser');

// // configuration ===============================================================
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // get information from html forms
app.set('view engine', 'ejs'); // set up ejs for templating
// app.use(express.cookieParser()); // read cookies (needed for auth)

// routes ======================================================================
// require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
app.use(express.static('.'));
