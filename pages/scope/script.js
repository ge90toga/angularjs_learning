(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'Angular';
  }])
  .controller('ListController', ['$scope', function($scope) {
    $scope.names = ['Igor', 'Misko', 'Vojta'];
  }]);
  
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/