var mongoose = require('mongoose');

module.exports= mongoose.model('teacher',{
	areaOfExpertise: {
		type: [{
			type: String
		}]
	},
	specialization: {
		type: [{
			type: String
		}]
	},
	awardsAndAccomplishments: {
		type: String,
		trim: true
	},
	addressLine1: {
		type: String,
		trim: true,
		default: ''
	},
	addressLine2: {
		type: String,
		default: ''
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	country: {
		type: String
	},
	mobile:{
		type:String
	},
	gender :{
		type:String
	},
	languagesSpoken :{
		type:String
	},
	profilePic: { 
		data: Buffer, contentType: String 
	},
	created: {
		type: Date,
		default: Date.now
	}
});

