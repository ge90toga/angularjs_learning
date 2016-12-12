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

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope) {
    $scope.persons =
        [
            {name: 'John Doe', address: '555 Main St., New York, NY 11111'},
            {name: 'Linus Quan', address: 'High St, Sydney'},
            {name: 'Taylor Swift', address: 'New York 1234'}
        ]

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

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
        replace: true ,// replace the parent tag or not
        scope:{
            personName:'@', // means we are passing a text property through the hole
            personAddress: "@"
        }
    }
});