var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Dog = require('../models/dog');
/* GET home page. */
router.get('/', function(req, res, next) {
	Dog.find({}, 'name url', function(err, dogs) {
		if (err) console.log(err);
		res.render('index', { title: 'Express', dogs: dogs });
	})
 
});

/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {

});

// ... other routes


module.exports = router;
