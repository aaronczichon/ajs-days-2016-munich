angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope, Media, $ionicPlatform) {
        $scope.movies = undefined;
        Media.getMovies().then(function(results) {
            $scope.movies = results;
            getImages();
        });

        function getImages() {
            for (var i = 0; i < $scope.movies.length; i++) {
                var movie = $scope.movies[i].movie;
                Media.getMovie(movie.ids.trakt).then(function(movieDetails) {
                    for (var k = 0; k < $scope.movies.length; k++) {
                        if ($scope.movies[k].movie.ids.trakt == movieDetails.ids.trakt) {
                            $scope.movies[k].movie.poster = movieDetails.images.poster.medium;
                            $scope.movies[k].movie.logo = movieDetails.images.logo.full;
                        }
                    }
                });
            }
        }
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
