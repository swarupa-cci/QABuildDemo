
var express = require('express');
var routes = require('./routes/api');
var morgan = require('morgan')
var path = require('path')
var fs = require('fs')


//session management
var session = require('express-session');

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// setup the logger
var app = express();
app.set('views','views');
app.set('view engine', 'ejs');

//session management
app.use(session({
    secret: 'd37a13ec-a916-4f20-9f81-b6270b021fe0',
    resave: true,
    saveUninitialized: true
}));

var bodyParser = require('body-parser')

//logging
app.use(morgan('combined', {stream: accessLogStream}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/', routes);
app.get('/', function (req, res) {
    res.render('login.ejs');          
}).listen(3000);

var dbhelper = require('./dbhelper');
var apiRouter = express.Router();
app.use('/api/v1', apiRouter);
 
var UserController = require('./controllers/UserController');
UserController.registerRoutes(apiRouter);

var LoginController = require('./controllers/LoginController');
LoginController.registerRoutes(apiRouter);

dbhelper.dbConnect()


