angular.module('rtfmApp')
    .service('EnvironmentService', function EnvironmentService($window) {
        return {
            getEnv: function() {
                return $window.env;
            },

            saveUsername: function(username) {
                $window.localStorage.setItem('username', username);
            },

            getUsername: function() {
                $window.localStorage.getItem('username');
            }
        };


    });
