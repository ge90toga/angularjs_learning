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

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope) {
    $scope.persons = [{
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }, {
        name: 'Linus',
        address: 'Kevin street',
        city: 'Sydney',
        state: 'NSW',
        zip: '12345'
    }, {
        name: 'Jane Doe',
        address: 'Kevin street',
        city: 'Sydney',
        state: 'NSW',
        zip: '12345'
    }]

    $scope.formattedAddress = function (person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

}]);

// define a service!
// order of declaring service doesn't matter
myApp.service('nameService', function () {

    var self = this;
    this.name = 'Kindle';
    this.namelength = function () {
        return self.name.length;
    };

});

// create a custom directive:
myApp.directive("searchResult", function () {
    return {
        restrict: 'AE', //attribute and element tag gets convert to the following template others: C class M comment
        templateUrl: 'directives/search-result.html', // use a template url
        replace: true,// replace the parent tag or not
        scope: { // isolated scope
            personObject: '=', // pass a = two way binding (type of hole! is a object we don't need {{}})
            formattedAddressFunction: "&" // pass a function
        },
        link: function (scope, elements, attrs) {
            // post-linking runs at the ending tag (Usually used here!)
            console.log('Post-linking...');
            console.log(scope);
            // we can change attribute, scope(model), element during linking
            if (scope.personObject.name == 'Jane Doe') {
                elements.removeAttr('class');
            }
            console.log(elements);

        },
        transclude: true
    }
});