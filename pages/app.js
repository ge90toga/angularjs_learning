// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope) {
    $scope.name = "Li Quan";
    $scope.job = "Good Software Developer";
    $scope.getName = function () {
        return "Tell me the name";
    }

    $scope.getJob = function () {
        // do not put $scope as function param here, this will not be dependency injection
        return $scope.job;
    }

    console.log($scope); // variable name created the in $scope
    console.log($scope.getName());
    console.log($scope.getJob());
});

/*
* How does angular do Dependency injection?
* The controller function sees "$scope" and knows that, create the $scope and inject to function
 */



