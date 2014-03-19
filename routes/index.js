/*
 * GET home page.
 */
exports.index = function (req, res) {
    res.render('index');
};

exports.login = function (req, res) {
    res.render('login');
};

exports.logout = function (req, res) {
    res.send('logged out');
};

exports.register = function (req, res) {
    res.render('register', { title: 'Register' });
};

exports.signup = function (req, res) {
    res.redirect('/home');
};

exports.home = function (req, res) {
    req.session.lastPage = '/home';
    res.render('home', { title: 'Home' });
};

var mongo = require('mongoose');
// mongo.connect('mongodb://localhost:port/db_name');
// var db = mongo.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function cb() {
//     console.log('mongodb connection is opened.');
// });

var Account = mongo.model('Account', {
    name: String,
    last4digit: String,
    amount: Number,
    date: { type: Date, default: Date.now }
});

exports.networth = {
    get: function (req, res) {
        console.log('networth get');
        res.render('networth', { title: 'Net worth' });
    },
    post: function (req, res) {

        var acc = new Account({
            name: req.body.name,
            amount: req.body.amount,
            last4digit: req.body.last4digit
        });

        acc.save(function (err) {
            if (err) {
                console.log(err);
            }
            console.log('Account saved');
        });

        res.render('networth', { title: 'Net worth' });
    }
};

exports.transactions = function (req, res) {
    res.render('transactions', { title: 'Transactions' });
};

exports.transaction = {
    post: function (req, res) {
        var data = { firstName: 'Andy', lastName: 'Yong' };
        res.json(data);
    }
};

exports.budgeting = function (req, res) {
    res.render('budgeting', { title: 'Budgeting' });
};

exports.reporting = function (req, res) {
    res.render('reporting', { title: 'Reporting' });
};

exports.session = function (req, res) {
    if (req.body.username === 'admin' && req.body.password === 'admin123') {
        res.redirect('/home');
    } else {
        res.redirect('/');
    }
};
