var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Dog = require('../models/dog');
/* GET home page. */
// router.get('/', function(req, res, next) {
// 	Dog.find({}, 'name url', function(err, dogs) {
// 		if (err) console.log(err);
// 		res.render('index', { title: 'Express', dogs: dogs });
// 	})
 
// });
router.get('/', function(req, res, next) {
// console.log("one");
                    var name= Dog.name;
                    var url = Dog.url;
    var puppy = function(){
// console.log("two");
    	Dog.count(function(err,count){
    		if (err){
    			var dog = null;
    			res.redirect("/");
                console.log("error operator");
    		}else{
    			var i = Math.floor(Math.random()* count--);
    			Dog.find({}, function(err, dawg){
    				
    				
                    var dawg = dawg[i];
    				res.render('index', {title: "Ok Corgi", id: dawg.id, url: dawg.url, name: dawg.name});
    			});
    		}


    	});

    }

puppy();

})





/* POST when the user "likes" a new Corgi. */
router.post('/likes', function(req, res, next) {

});

// ... other routes


module.exports = router;
