var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/login/login.html',
            controller: 'LoginController',
        })

    .when('/threads', {
        templateUrl: './threads/threads.html'
    })

    .when('/threads/:threadId', {

    })

    .otherwise('/login');


});
