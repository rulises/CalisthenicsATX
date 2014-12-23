var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
        var mongoose = req.mongoose;
        var persons = mongoose.model('Person',
                        new Schema({username: String, email:String}),
                        'people');
        persons.find({},{}, function(e, docs){
            res.render('userlist' { "userlist" : docs });   
        });
});

module.exports = router;
