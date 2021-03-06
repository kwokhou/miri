
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
app.use(express.session({ secret: 'my secret session' }));

/**
 * Uncomment to enable CSRF
 *
app.use(express.csrf());
app.use(function (req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});
*/

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res) {
    res.status(404);
    res.render('404', { title: '404: File Not Found' });
});

app.use(function (err, req, res, next) {
    res.status(500);
    res.render('500', { title: '500: Internal Server Error', error: err });
});

// development env setup
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    app.locals.pretty = true;
}

// routes to controller mapping
app.get('/login', routes.login);
app.get('/register', routes.register);
app.get('/home', routes.home);
app.get('/transactions', routes.transactions);
app.get('/budgeting', routes.budgeting);
app.get('/reporting', routes.reporting);

app.post('/logout', routes.logout);
app.post('/session', routes.session);
app.post('/signup', routes.signup); // submit from register page

app.get('/networth', routes.networth.get);
app.post('/networth', routes.networth.post);
app.post('/transaction', routes.transaction.post);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
