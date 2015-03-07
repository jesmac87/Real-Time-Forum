var app = angular.module('rtfmApp');

app.controller('ThreadsController', function($scope, threadsRef) {
    $scope.threads = threadsRef;

    $scope.createThread = function(username, title) {
        $scope.threads.$add({
            username: username,
            title: title
        });
        $scope.newThreadTitle = '';
    };
});
