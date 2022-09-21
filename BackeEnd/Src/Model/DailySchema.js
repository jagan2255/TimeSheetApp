const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailySchema = new Schema({


  email: String,
  date: String,
  minutes: Number,

});

var dailydata = mongoose.model('dailydata', DailySchema);
module.exports = dailydata;