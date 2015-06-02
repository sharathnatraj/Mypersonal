'use strict';

var express = require('express');
var searchApp = express.Router();
var server = require('../../server');

//getting controllers
var searchController = require('../controllers/search-controller.js');


// define the home page route
searchApp.get('/', function(req, res) {
  res.send('Search home page');
});

// define the about route
searchApp.post('/searchTeacher', function(req, res) {
	console.log(req.body);
 	searchController.searchTeacher(req,res);
});


module.exports = searchApp;