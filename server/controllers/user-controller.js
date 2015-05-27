var User = require('../models/user');
var Teacher = require('../models/teacher');

module.exports.create = function(req,res){

	console.log('In the Create Function');

	var user = new User(req.body);
	console.log(req.body);
	user.save(function (err,result){

		if (err) {
			console.log(err);
			return res.status(400).send(err);
		}else {

			res.json(result);
		}
		
	});
}
module.exports.createTeacher = function(req,res){

	console.log('In the Create Function');

	var teacher = new Teacher(req.body);
	console.log(req.body);
	teacher.save(function (err,result){
		if (err){
			return res.status(400).send(err);
		} else{
			res.json(result);
		}
		
	});
}

module.exports.list = function(req, res){
	User.find({}, function(err, results){
		res.json(results);
	});
}