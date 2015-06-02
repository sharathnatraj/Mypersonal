'use strict';

var express = require('express');
var usersApp = express.Router();
var server = require('../../server');

//getting controllers
var userController = require('../controllers/user-controller.js');


// define the home page route
usersApp.get('/', function(req, res) {
  res.send('Users home page');
});
// define the about route
usersApp.get('/registerTeachers', function(req, res) {
 res.sendfile(server.dirname+ '/client/views/user/registerTeachers.html');
});

// define the about route
//usersApp.get('/signUpUser', userController.create);

// define the about route
usersApp.post('/signUpUser', function(req, res) {
	console.log(req.body);
 	userController.create(req,res);
});

// define the about route
usersApp.post('/signUpTeacher', function(req, res) {
	console.log(req.body);
 	userController.createTeacher(req,res);
 	console.log('Inserted TEacher REcord Successfully');
});


// define the login route
usersApp.post('/login', function(req, res) {
	console.log(req.body);
 	userController.authenticateUser(req,res);
});

module.exports = usersApp;