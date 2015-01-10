var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* LOGIN */
app.get('/login', function(req, res){
    res.render('login.ejs', { message:req.flash('loginMessage') });    
});
// process the login form
app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));
/* SIGNUP */
app.get('/signup', function(req, res){
    res.render('signup.ejs', { message:req.flash('signupMessage') });    
});

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
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

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
