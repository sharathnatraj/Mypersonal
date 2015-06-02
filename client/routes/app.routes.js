


'use strict';

app.config(function ($routeProvider, $locationProvider, $httpProvider) {
 $httpProvider.responseInterceptors.push('httpInterceptor');

  $routeProvider
	 .when('/', { templateUrl: '/views/home.html', controller: 'UserController'})
	 .when('/users/signup', {templateUrl: '/views/user/SignUp.html',controller: 'UserController'})
	 .when('/login', { templateUrl: 'views/auth.html', controller: 'auth' })
	 .when('/users/registerTeachers', {templateUrl: '/views/user/registerTeachers.html',controller: 'UserController'})
	 .when('/dashboard/teachers', {templateUrl: '/views/dashboard/teacher.dashboard.html',controller: 'AuthenticationController'})
	 .when('/dashboard/header', {templateUrl: '/views/dashboard/teacher.header,dashboard.html',controller: 'AuthenticationController'})
	 .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
});

app.run(function (api) {
  api.init();
});