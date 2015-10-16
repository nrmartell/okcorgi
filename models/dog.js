// Dog model w/ Mongoose
// User model w/ Mongoose
// /models/user.js
var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
  name: String,
  url: String,
});

var Dog = mongoose.model('Dog', dogSchema);

// Make this available to our other files
module.exports = Dog;