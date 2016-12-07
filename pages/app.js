var myApp = angular.module('myApp', []); // modules from other files (not angular.js)

myApp.controller('mainController', ["$scope","$log", function ($scope, $log) {
    // this version of DI will be magnification proof
    // the order matters, the service injection and function parameter has to be matched
    // function has to be at the last element of the array
}]);

// This is the compressed version, angular can inject it only if you keep the order correct
//myApp.controller("mainController",["$scope","$log",function(a,b){}]);