var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = function(app, passport){
/* GET home page. */
app.get('/', function(req, res) {
  res.render('index.ejs');
});

/* LOGIN */
app.get('/login', function(req, res){
    res.render('login.ejs', { message:req.flash('loginMessage') });    
});

/* SIGNUP */
app.get('/signup', function(req, res){
    res.render('signup.ejs', { message:req.flash('signupMessage') });    
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash : true
}));
/* PROFILE */
app.get('/profile',isLoggedIn, function(req, res){
    res.render('profile.ejs', { user:req.user });    
});

/* LOGOUT */
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');    
});
/* GET Userlist page. 
app.get('/userlist', function(req, res) {
        var mongoose = req.mongoose;
        var persons = mongoose.model('Person',
                        new Schema({username: String, email:String}),
                        'people');
        persons.find({},{}, function(e, docs){
            res.render('userlist', { "userlist" : docs });   
        });
});*/
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticared())
        return next();
    res.redirect('/');
}
