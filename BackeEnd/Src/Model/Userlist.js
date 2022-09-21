const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserlistSchema = new Schema({

  username:String,
  email: String,

});

var userlistdata = mongoose.model('userlistdata', UserlistSchema);
module.exports = userlistdata;