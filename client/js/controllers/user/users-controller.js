'use strict';

angular.module('meetupApp', ['ngRoute'])


.controller('UserController', ['$scope','$location','$http',
    function ($scope, $location, $http) {

       // var users = $resource('/users/signin');
    
        $scope.countries = [
            {name:'India', code:'IN'}
        ];

        $scope.states=[
            {name:'TamilNadu', value:'TN'},
            {name:'Kerala', value:'KL'},
            {name:'Karnataka', value:'KA'},
            {name:'Andhra Pradesh', value:'AP'}
        ];

        $scope.expertises=[
            {name:'Vocal', value:'VC'},
            {name:'String Instrumental', value:'SI'},
            {name:'Percussions', value:'PR'},
            {name:'Others', value:'OT'}
        ];


        $scope.specialisations=[
            {name:'Vocal Carnatic', value:'CARVC'},
            {name:'Vocal Hindustani', value:'HINVC'},
            {name:'Vocal Ghazal', value:'GHAVC'},
            {name:'Violin  Carnatic', value:'CARVO'}
        ];
        //$scope.teachers.country = $scope.countries[0];

        $scope.test1Function = function() {
           alert('Please');
            $location.path('/users/signup');
        };

        $scope.testFunction = function() {
            alert($scope.teachers.mobile);
            $scope.teachers.specialization = $('#specialization').val();
            $scope.teachers.areaOfExpertise = $('#areaOfExpertise').val();
            $http.post('/users/signUpTeacher',$scope.teachers).success(function(response) {
               $location.path('/');
            }).error(function(response) {
                $scope.errors = response.message;
                 $('#error_message').html(response.message) ;
            });
            
        };


        $scope.signupFunction = function() {
            alert('In Signup');
            $scope.users.roles = [];
            $scope.users.roles.push($scope.users.role);
            $http.post('/users/signUpUser',$scope.users).success(function(response) {
               $scope.users = response;
                var userRole = $scope.users.roles;
                alert(userRole);

                // And redirect to the index page for users 
                //redirect to teachers page for teachers
                if (userRole == 'teacher'){
                    alert('REdirecting to Teacher Registration');
                    $location.path('/users/registerTeachers');
                }
                else 
                    $location.path('/');
            }).error(function(response) {
                alert('In Error');
                $scope.errors = response.message;
                $('#error_message').html(response.message) ;
            });
        };


    }])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/users/signup', {
    templateUrl: '/views/user/SignUp.html',
    controller: 'UserController'
  })
  .when('/users/registerTeachers', {
    templateUrl: '/views/user/registerTeachers.html',
    controller: 'UserController'
  })

 .when('/', {
    templateUrl: '/views/home.html',
    controller: 'UserController'
  });


  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
})

.directive('specialization', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'AEC',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            alert('HEre');
            $(element).select2();
        }
    };
})

.directive('areaOfExpertise', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'AEC',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            alert('HEre');
            $(element).select2();
        }
    };
});





