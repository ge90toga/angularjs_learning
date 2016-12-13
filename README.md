# angularjs_learning
- Custom directive
- By default, directives can access model if it is contained in a template, e.g. search-result can acess
mainControler's person.
- But that is not a desirable property (directive should be reused).
- We use **isolated** **scope** to deal with this issue:

In directive, we have 
```javascript
// create a custom directive:
myApp.directive("searchResult", function() {
    return {
        restrict: 'AE', //attribute and element tag gets convert to the following template others: C class M comment
        templateUrl: 'directives/search-result.html', // use a template url
        replace: true ,// replace the parent tag or not
        scope:{
            personName:'@', //
            personAddress: '@'
        }
    }
});
```
- If we what to pass object in, we could modifiy the directive:
```javascript
myApp.directive("searchResult", function() {
    return {
        restrict: 'AE', //attribute and element tag gets convert to the following template others: C class M comment
        templateUrl: 'directives/search-result.html', // use a template url
        replace: true ,// replace the parent tag or not
        scope:{
            personObject:'=' // pass a = two way binding
        }
    }
});
```
- and template html:
```html
<h1>This is Main</h1>
<hr/>
<input type="text" ng-model="name" />

<h3>Search Results</h3>
<div class="list-group">
    <search-result ng-repeat="person in persons" person-object="person"></search-result>
</div>
```

- and directive template
```html
<a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">{{personObject.name}}</h4>
    <p class="list-group-item-text">{{personObject.address}}</p>
</a>
```
