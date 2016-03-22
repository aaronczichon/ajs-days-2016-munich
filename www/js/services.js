angular.module('starter.services', [])

.factory('Media', ['$http', function($http) {
    
    function getMovies() {
        var defer = new Promise(function(resolve, reject) {
            $http.get('http://ajs-days.azurewebsites.net/movies').then(function(results) {
               resolve(results.data); 
            });
        });
        
        return defer;
    }

  return {
    getMovies: function() {
        return getMovies();
    }
  };
}]);
