angular.module('tasafoconf2015', ['ionic', 'tasafoconf2015.controllers', 'tasafoconf2015.services', 'tasafoconf2015.filters','ionicLazyLoad'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('app.programacao', {
            url: '/programacao',
            views: {
                'menuContent': {
                    templateUrl: 'templates/programacao.min.html',
                    controller: 'ProgramacaoCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
