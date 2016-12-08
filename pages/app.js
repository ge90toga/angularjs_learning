var myApp = angular.module('myApp', []); // modules from other files (not angular.js)

myApp.controller('mainController', ["$scope","$filter","$log", function ($scope,$filter,$log) {
    $scope.handle = ''; // declaration here is optional since the view has ng-model directive

    $scope.lowercaseHandle = function(){
        return $filter("lowercase")($scope.handle);
    }

    // manually add watches
    // $scope.$watch('handle',function (oldValue,newValue) {
    //     $log.info('changed old: '+ oldValue+" new: "+newValue);
    // })

    // a way might make the scope watcher unaware of changes because
    // this traditional js code runs outside of the scope context

    // setTimeout(function () {
    //     $scope.handle = 'new value';
    //     $log.info('changed!');
    // },3000);

    // use scope apply to make the change affect the $scope
    // setTimeout(function () {
    //     $scope.$apply(function () {
    //         $scope.handle = "hehe";
    //     })
    //     $log.info('changed!');
    // },3000);

    // or use the $time service



}]);

// This is the compressed version, angular can inject it only if you keep the order correct
//myApp.controller("mainController",["$scope","$log",function(a,b){}]);
