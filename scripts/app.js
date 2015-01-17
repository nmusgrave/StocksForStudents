var stocksApp = angular.module('stocksApp', ['ngRoute', 'chart.js', 'ngMaterial', ]);

// configure routes
stocksApp
.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    /* ROUTES NOT BEING USED
    .when('/', {
            templateUrl : 'views/main.html',
            controller  : 'mainController'
    })
*/
})