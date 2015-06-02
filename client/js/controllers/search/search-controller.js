'use strict';

app.controller('SearchController', function ($scope, $location, searchService) {

  $scope.searchResults='';

  $scope.search = function () {

      var search = {
          searchTerm: $scope.searchTerm
      };
    
      var success = function (data) {
        $scope.searchResults = data;
      };

      var error = function () {
        alert('In error');
      };

      searchService.search(search).success(success).error(error);
  };

});