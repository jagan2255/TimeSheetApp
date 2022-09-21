const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonthlySchema = new Schema({


  email: String,
  month: String,
  year: String,
  hours: Number

});

var monthlydata = mongoose.model('monthlydata', MonthlySchema);
module.exports = monthlydata;