var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Dog = require('../models/dog');


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
    		}
            else{
    			var i = Math.floor(Math.random()* count--);
    			Dog.find({}, function(err, dawg){
    				
    				
                    var dawg = dawg[i];
                    User.findOne({ '_id': "56203c7ae4b0e719d7aaed13" }, 'likes', function (err, user) {
                        if (err) return handleError(err); 
                        // var likes = user.likes
                        // for (i = 0; i <likes.length; i++) {
                        //     Dog.findOne({ '_id': likes[i] }, 'name url', function (err, dog) {
                        //     if (err) return handleError(err); 
                        //     $("#like_list").append("<li><%= dog.name %> <img class='thumbnail' src='<%= dog.url %>'> 
                        //         </li>")

                            
    				        res.render('index', {title: "Ok Corgi", id: dawg.id, url: dawg.url, name: dawg.name, likes: user.likes });
                            // });
    			
                        }
                	// });

                // });
    	   }
        });
    }

puppy();

});





/* POST when the user "likes" a new Corgi. */
router.get('/likes', function(req, res, next) {
    var dog_id = req.query.id
    User.findOne({ '_id': "56203c7ae4b0e719d7aaed13" }, 'name likes', function (err, user) {
      if (err) return handleError(err);
      // console.log(likes);
    user.likes.push(dog_id)
    user.save(function(err) {
        if (err) console.log(err);
        res.redirect('/')
        })

    })

   

});

// ... other routes


module.exports = router;
