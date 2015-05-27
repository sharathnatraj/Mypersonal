var mongoose = require('mongoose');

module.exports= mongoose.model('User',{
	firstName: {
		type: String,
		trim: true,
		default: ''
	},
	lastName: {
		type: String,
		trim: true,
		default: ''
	},
	displayName: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true,
		default: '',
		match: [/.+\@.+\..+/, 'Please fill a valid email address'],
		unique: 'Email Address already exists',
		required: 'Please fill in a Email Address',
	},
	password: {
		type: String,
		default: ''
	},
	salt: {
		type: String
	},
	roles: {
		type: [{
			type: String,
			enum: ['user', 'admin','teacher','student', 'parent']
		}],
		default: ['user']
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	}
});


