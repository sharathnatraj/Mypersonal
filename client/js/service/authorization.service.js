app.factory('authorization', function ($http) {
 // var url = config.analytics.url;

  return {
      login: function (credentials) {
          return $http.post('/users/login', credentials);
      },

      signup: function (credentials) {
          return $http.post('/users/signUpUser', credentials);
      }
  };
});