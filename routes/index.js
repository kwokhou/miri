/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Index' });
};

exports.login = function(req, res){
  req.session.lastPage = '/login';
  res.render('login', {title: 'Login' });
};

exports.logout = function(req, res){
  res.send('logged out');
};

exports.register = function(req, res){
  res.render('register', {title: 'Register' });
};

exports.signup = function(req, res) {
  res.send('Signed up success');
};

exports.home = function (req, res){
  req.session.lastPage = '/home';
  res.render('home', {title: 'Home' });
};

exports.session = function(req, res) {
  // console.log('user logged in');
  if(req.session.lastPage) {
    // res.write('saved lastpage: ' + req.session.lastPage);
    res.redirect('/home');
  } else {
    res.redirect('/');
  }
};

