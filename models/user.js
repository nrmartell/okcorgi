// User model w/ Mongoose
// /models/user.js
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  likes: Array,
});

var User = mongoose.model('User', userSchema);

// Make this available to our other files
module.exports = User;