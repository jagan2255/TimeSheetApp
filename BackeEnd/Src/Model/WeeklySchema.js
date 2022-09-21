const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WeeklySchema = new Schema({


  email: String,
  week: String,
  year: String,
  hours: Number

});

var weeklydata = mongoose.model('weeklydata', WeeklySchema);
module.exports = weeklydata;