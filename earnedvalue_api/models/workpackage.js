// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('WorkPackage', new Schema({
    id: String,
    name: String,
    idWeek: String,
    description: String,
    totalHours: String,
    hourCost: String,
    extraCost: String,
    actualTotalHours:String,
    actualHourCost: String,
    actualextraCost: String
  
}));
