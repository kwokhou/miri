var app = angular.module('myApp', []);

app.service('nametrickService', function () {
    this.reverse = function (name) {
        return name.split("").reverse().join("");
    };
});

app.factory('nametrickFactory', function () {
    return {
        reverse: function (name) {
            return name.split("").reverse().join("");
        }
    };
});

app.controller('AppCtrl', function AppCtrl($scope, nametrickService, nametrickFactory) {
    $scope.name = 'Guest';

    $scope.reverseNameService = function () {
        $scope.name = nametrickService.reverse($scope.name);
    };

    $scope.reverseNameFactory = function () {
        $scope.name = nametrickFactory.reverse($scope.name);
    };

    $scope.projects = [{
        pid: '9dfjalskdjfa98ausdfalskd0',
        name: 'My Personal Budget',
        desc: 'An app that keep tracks of my personal budget and spending'
    }, {
        pid: 'jdfjalskdjfa98ausdfajj334',
        name: 'Miri Now',
        desc: 'A Personal Assistance app that keep tracks all my TODO stuff'
    }];
});
