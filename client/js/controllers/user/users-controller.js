'use strict';

app.controller('UserController', ['$scope','$location','$http',
    function ($scope, $location, $http) {

       // var users = $resource('/users/signin');
    
        $scope.countries = [
            {name:'India', code:'IN'}
        ];
// $scope.dataLoading=true;
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
        

        $scope.test1Function = function() {
           alert('Please');
            $location.path('/users/signup');
        };

        $scope.testFunction = function() {
            alert($scope.teachers.mobile);
            $scope.teachers.specialization = $('#specialization').val();
            $scope.teachers.areaOfExpertise = $('#areaOfExpertise').val();
            alert($scope.teachers.profilePic);
            $http.post('/users/signUpTeacher',$scope.teachers).success(function(response) {
               $location.path('/');
            }).error(function(response) {
                $scope.errors = response.message;
                 $('#error_message').html(response.message) ;
            });
            
        };

    }])



