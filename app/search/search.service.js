(function() {
  angular
    .module('searchModule')
    .service('searchService', searchService);

  searchService.$inject = ['$http'];
  function searchService($http) {
    var baseUrl = 'http://swapi.co/api/',
        separator = '/'
    this.fetchRecords = function(searchCategory, searchPhrase) {
      var requestUrl = baseUrl + searchCategory + separator,
          configObj = {
        params: {
          search: searchPhrase
        }
      };

      return $http.get(requestUrl, configObj);
    }
  }
})();
