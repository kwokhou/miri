/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index');
};

exports.login = function(req, res){
  res.render('login');
};

exports.logout = function(req, res){
  res.send('logged out');
};

exports.register = function(req, res){
  res.render('register', {title: 'Register' });
};

exports.signup = function(req, res) {
  res.redirect('/home');
};

exports.home = function (req, res){
  req.session.lastPage = '/home';
  res.render('home', {title: 'Home' });
};

exports.balancesheet = function (req, res) {
  res.render('balancesheet', {title: 'Balance Sheet' });
};

exports.transactions = function (req, res) {
  res.render('transactions', {title: 'Transactions' });
};

exports.budgeting = function (req, res) {
  res.render('budgeting', {title: 'Budgeting' });
};

exports.reporting = function (req, res) {
  res.render('reporting', {title: 'Reporting' });
};

exports.session = function(req, res) {
  if(req.body.username === 'admin' && req.body.password == 'admin123') {
    res.redirect('/home');
    //if(req.session.lastPage) {
    //res.redirect('/home');
  } else {
    res.redirect('/');
  }

};

