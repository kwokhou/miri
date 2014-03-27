var miriApp = angular.module('miriApp', ['ngRoute']);

miriApp.controller('MiriListCtrl', ['$scope', function ($scope) {
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'fast just got faster with Nexus S'
        },
        {
            'name': 'Motorola XOOM',
            'snippet': 'The next, next generation tablet'
        }
    ];
}]);
