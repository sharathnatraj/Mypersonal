app.factory('searchService', function ($http) {
 // var url = config.analytics.url;

  return {
      search: function (credentials) {
      		alert(credentials);
          return $http.post('/search/searchTeacher', credentials);
      }
  };
});