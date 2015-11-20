angular.module('tasafoconf2015.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


    })
    .controller('ProgramacaoCtrl', function($scope, $http) {

        $scope.init = function() {
            var tasafo = window.localStorage.getItem("tasafo");
            if (tasafo !== null) {
                $scope.devops = JSON.parse(window.localStorage.getItem("tasafo")).sessions;
                $scope.$apply();
            } else {
                $rootScope.init(function() {
                    $scope.devops = JSON.parse(window.localStorage.getItem("tasafo")).sessions;
                    $scope.$apply();
                });
            }
        };


    })
    .controller('HomeCtrl', function($scope, $rootScope,$http) {
        $rootScope.init = function(callback) {
            console.log(window.localStorage.getItem("tasafo"));
            if (window.localStorage.getItem("tasafo") === null) {
                $http.get('data.json').success(function(data) {
                    window.localStorage.setItem("tasafo", JSON.stringify(data));
                    callback();
                });
            }
        };
        $rootScope.init(function() {});
    })
    .controller('PlaylistsCtrl', function($scope) {
        $scope.playlists = [{
            title: 'Reggae',
            id: 1
        }, {
            title: 'Chill',
            id: 2
        }, {
            title: 'Dubstep',
            id: 3
        }, {
            title: 'Indie',
            id: 4
        }, {
            title: 'Rap',
            id: 5
        }, {
            title: 'Cowbell',
            id: 6
        }];
    })

.controller('PlaylistCtrl', function($scope, $stateParams) {});
