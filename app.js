var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs'); // enable ejs 

/* Make body requests */
app.use(bodyParser.json()); // parse application/json                        
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

/* Include other files  */
var indexRouter = require('./routes/scraper');
var usersRouter = require('./routes/users');

app.use('/', indexRouter); // only root will be sent to indexRouter
app.use('/crackers', usersRouter);
app.use(express.static(__dirname + '/public')); // serving this after ejs made it work?

/* Connect to server */ 
app.listen(3000, function(err){
    if (err){
        console.log("The server has failed to connect");
        return;
    } // if 
    console.log("Connected to port 3000");
});

/** Deprecated Node Middleware */
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
//
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
