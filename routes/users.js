var express = require('express');
var router = express.Router();
// Require the User model
var User = require('../models/user');

// ... other routes

router.get('/', function(req, res, next) {
    var name = req.body.name;
    var likes = req.body.likes;  

    
});

module.exports = router;