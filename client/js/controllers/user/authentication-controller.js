'use strict';

app.controller('AuthenticationController', function ($scope, $location, $cookieStore, authorization, api) {
  $scope.title = 'Likeastore. Analytics';
  
  $scope.user = $cookieStore.get('token');

  $scope.login = function () {
      var credentials = {
          email: $scope.email,
          password: $scope.password
      };
      var success = function (data) {
          var token = data;
          api.init(token);         
          $cookieStore.put('token', token);
          $location.path('/dashboard/teachers');
      };

      var error = function () {
        alert('In error');
         $scope.error = "Sorry Looks like your emailAddress and password combination does not exist. Please try again";
         $location.path('/');
      };

      authorization.login(credentials).success(success).error(error);
  };

   $scope.signup = function () {
   
      $scope.users.roles = [];
      $scope.users.roles.push($scope.users.role);

      var success = function (data) {
          var token = data;
          api.init(token);         
          $cookieStore.put('token', token);
          var userRole = token.roles;
              
          if (userRole == 'teacher'){
              alert('Redirecting to Teacher Registration');
              $location.path('/users/registerTeachers');
          }
          else 
              $location.path('/');
      };

      var error = function () {
        alert('In error');
        $scope.errors = response.message;
        $('#error_message').html(response.message) ;     
      };

      authorization.signup($scope.users).success(success).error(error);
  };
});