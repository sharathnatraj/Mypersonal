var User = require('../models/user');
var Teacher = require('../models/teacher');

module.exports.searchTeacher = function(req, res){
	console.log("Verifying with the database");
	var searchCriteria = req.body;
	console.log("Search By"+searchCriteria.searchTerm)

	//like search on the specialization
	Teacher.find({$or:[{specialization:new RegExp(searchCriteria.searchTerm, 'i')},
		{areaOfExpertise:new RegExp(searchCriteria.searchTerm, 'i')}]}, function(err, results){
		console.log(results);

		if (err || results.length <= 0){
			return res.status(400).send(err);
		} else{
			//token.results = results;
			res.json(results);
		}
	});
}