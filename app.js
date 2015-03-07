var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: './login/login.html',
            controller: 'LoginController',
        })

    .when('/threads', {
        templateUrl: './threads/threads.html',
        controller: 'ThreadsController',
        resolve: {
            threadsRef: function(ThreadService) {
                return ThreadService.getThreads();
            }
        }

    })

    .when('/thread/:threadId', {
        templateUrl: './threads/thread.html',
        controller: 'ThreadController',
        resolve: {
            threadRef: function(ThreadService, $route) {
                return ThreadService.getThread($route.current.params.threadId);
            },

            commentsRef: function(ThreadService, $route) {
                return ThreadService.getComments($route.current.params.threadId);
            }
        },



    })

    // .when('/thread', {
    //     templateUrl: './threads/thread.html',
    //     controller: 'ThreadController',
    //     resolve: {
    //         threadRef: function(ThreadService, $route) {
    //             return ThreadService.getThread($route.current.params.threadId);
    //         },
    //         commentsRef: function(ThreadService, $route) {
    //             return ThreadService.getComments($route.current.params.threadId);
    //         }
    //     }
    // })


    .otherwise('/login');
});

app.run(function($rootScope, $location, EnvironmentService) {
    $rootScope.$on('$routeChangeStart', function(event) {
        if (EnvironmentService.getUsername()) {
            $rootScope.username = EnvironmentService.getUsername();
        } else {
            $location.path('/login');
        }
    });
});
