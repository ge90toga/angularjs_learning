'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
    .controller('mainController',["$scope","$location","$log",function ($scope,$location,$log) {
      $log.info($location.path()); // try visiting by localhost/index.html#/bookmark/1
    }]);
