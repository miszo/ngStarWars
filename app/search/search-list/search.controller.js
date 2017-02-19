(function() {
  angular
    .module('searchModule')
    .controller('searchCtrl', searchCtrl);

  searchCtrl.$inject = ['$scope', '$location', 'searchService'];

  function searchCtrl($scope, $location, searchService) {
    $scope.searchPhrase = 'skywalker';
    $scope.searchCategories = [
      'people',
      'planets',
      'films',
      'species',
      'vehicles',
      'starships'
    ];

    $scope.categoryChange = function(category) {
      $scope.searchCategory = category;
    }

    $scope.search = function() {
      searchService
        .fetchRecords($scope.searchCategory, $scope.searchPhrase)
        .then(function(response) {
          console.log(response.data.results);
        })
    }

  }
})();