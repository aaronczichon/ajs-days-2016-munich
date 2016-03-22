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
    
    function singleMovie(id) {
        var defer = new Promise(function(resolve, reject) {
            $http.get('http://ajs-days.azurewebsites.net/movies/' + id).then(function(result) {
               resolve(result.data); 
            });
        });
        return defer;
    }

  return {
    getMovies: function() {
        return getMovies();
    },
    getMovie: function(id) {
        return singleMovie(id);
    }
  };
}]);
