(function() {
  angular
    .module('app', ['ngRoute', 'searchModule'])
    .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'home/home.html'
      });

      $routeProvider
        .otherwise({redirectTo: '/'});
    }
})();