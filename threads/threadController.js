angular.module('rtfmApp')
    .controller('ThreadController', function($scope, threadRef, commentsRef) {
        var thread = threadRef;

        thread.$bindTo($scope, 'thread');

        $scope.comments = commentsRef;

        $scope.createComment = function(username, text) {
            $scope.comments.$add({
                username: username,
                text: text
            });
        };
    });
