'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/',{
            templateUrl:'pages/main.html',
            controller:'mainController'
        })

        .when('/second',{
            templateUrl:'pages/second.html',
            controller:'secondController'
        })

        .when('/second/:num/:num2',{
            templateUrl:'pages/second.html',
            controller:'secondController'
        });

    })
    .controller('mainController',["$scope",function ($scope) {
        $scope.name = "name of main";
    }])
    .controller('secondController',["$scope","$routeParams",function ($scope,$routeParams) {
        $scope.num = $routeParams.num || "default 1";
        $scope.num2 = $routeParams.num2 || "default 2";
    }]);