var seedApp = angular.module('seedApp', ['ngRoute']);

// configure routes
seedApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
            templateUrl : 'views/main.html',
            controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
    })
});