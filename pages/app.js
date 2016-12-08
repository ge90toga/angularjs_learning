var myApp = angular.module('myApp', []); // modules from other files (not angular.js)

myApp.controller('mainController', ["$scope","$filter","$log","$http", function ($scope,$filter,$log,$http) {
    $scope.handle = ''; // declaration here is optional since the view has ng-model directive

    $scope.lowercaseHandle = function(){
        return $filter("lowercase")($scope.handle);
    }

    $scope.charlen = 5;




}]);

// This is the compressed version, angular can inject it only if you keep the order correct
//myApp.controller("mainController",["$scope","$log",function(a,b){}]);
