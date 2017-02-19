(function() {
  angular
    .module('searchModule', [])
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'search/search-list/search.html',
        controller: 'searchCtrl'
      });
  }
})();