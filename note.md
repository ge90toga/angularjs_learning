# angularjs_learning
- Custom directive
- By default, directives can access model if it is contained in a template, e.g. search-result can acess
mainControler's person.
- But that is not a desirable property (directive should be reused).
- We use **isolated** **scope** to deal with this issue:

In directive, we have:
```javascript
// create a custom directive:
myApp.directive("searchResult", function() {
    return {
        restrict: 'AE', //attribute and element tag gets convert to the following template others: C class M comment
        templateUrl: 'directives/search-result.html', // use a template url
        replace: true ,// replace the parent tag or not
        scope:{
            personName:'@', // we are passing text
            personAddress: '@'
        }
    }
});
```
In the template, we pass value by property (use xxx-xxx normalisation)
```html
<search-result person-name="{{ person.name }}" 
person-address="{{ person.address }}"></search-result>
```
In the directive template, we do:
```html
<a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">{{personName}}</h4>
    <p class="list-group-item-text">{{personAddress}}</p>
</a>
```
