var mongoose = require('mongoose');

module.exports= mongoose.model('Meetup',{
	name:{type:String  , required:true }
});