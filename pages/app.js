angular.module('myApp', [])
    .controller('mainController', ["$scope","$filter","$log","$http", function ($scope) {
        $scope.name = "scope1";
}])
    .controller('secondController',["$scope",function ($scope) {
        $scope.name = "scope2";
}])
    .controller('insideMain',["$scope",function ($scope) {
        console.log($scope)

}]);


// they all use $scope, but they are not same $scope object
// $scope hierarchy is defined by view's ng-controller directive
