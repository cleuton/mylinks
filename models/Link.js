var Mongoose = require('mongoose');

exports.LinksSchema = new Mongoose.Schema({
  description : { type : String, required : true },
  url : { type : String, required : true }
});