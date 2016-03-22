angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope, Media, $ionicPlatform) {
        $ionicPlatform.ready(function() {
            $scope.movies = undefined;
            Media.getMovies().then(function(results) {
                $scope.movies = results;
                for(var i = 0; i < $scope.movies.length; i++) {
                    var movie = $scope.movies[i].movie;
                    Media.getMovie(movie.ids.trakt).then(function(movieDetails) {
                       movie.movieDetails = movieDetails; 
                    });
                }
            });
        });
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
