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


module.exports.authenticateUser = function(req, res){
	console.log("Verifying with the database");
	var searchCriteria = req.body;
	User.find({$and:[{email:searchCriteria.email},{password:searchCriteria.password}]}, function(err, results){
		console.log(results);

		if (err || results.length <= 0){
			return res.status(400).send(err);
		} else{
			//token.results = results;
			res.json(results);
		}
	});
}