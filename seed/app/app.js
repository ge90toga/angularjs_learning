var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});



myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    $log.info('main Controller is on');
    $scope.name = nameService.name;

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());
    $log.info('main Controller is ends...');

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    // when this scope grabs view, angular will execute this line by line
    $log.info('second Controller is on');
    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    $log.info('second Controller ends');
}]);

// define a service!
// order of declaring service doesn't matter
myApp.service('nameService', function() {

    var self = this;
    this.name = 'Kindle';
    this.namelength = function() {
        return self.name.length;
    };

});

// create a custom directive:
myApp.directive("searchResult", function() {
    return {
        restrict: 'AE', //attribute and element tag gets convert to the following template others: C class M comment
        templateUrl: 'directives/search-result.html', // use a template url
        replace: true // replace the parent tag or not
    }
});