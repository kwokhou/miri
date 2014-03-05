
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('yes your secret here'));
app.use(express.session({secret: 'my secret session'}));
app.use(express.csrf()); // this affects all POST/PUT/DELETE request
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development env setup
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

// middleware to set csrf token to local
// var csrf = function(req, res, next) {
//  res.locals._csrf = req.csrfToken();
//  next();
// }

// init helpers objects
app.locals.errors = {};
app.locals.message = {};

// routes to controller mapping
app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/logout', routes.logout);
app.get('/register', routes.register);
app.get('/home', routes.home);
app.get('/balancesheet', routes.balancesheet);
app.get('/transactions', routes.transactions);
app.get('/budgeting', routes.budgeting);
app.get('/reporting', routes.reporting);

app.post('/session', routes.session);
app.post('/signup', routes.signup); // submit from register page

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

