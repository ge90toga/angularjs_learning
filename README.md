### Transclusion
- a big topic
- basically it is including one document inside another;
- one way to do simple transclusion
Directive:
```javascript
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
        transclude: true // set transclusion true
    }
});

```
Directive template
```html
<a href="#" class="list-group-item">
    <h4 class="list-group-item-heading">{{ personObject.name }}</h4>
    <p class="list-group-item-text">
        {{ formattedAddressFunction({ aperson: personObject }) }}
    </p>
    <small ng-transclude></small> <!-- include components (taking the advantage of html formatting)-->
</a>
```
Template View:
```html
<h1> This is Main</h1>
<hr/>
<input type="text" ng-model="name" />

<h3>Search Results</h3>
<div class="list-group">
    <search-result ng-repeat="person in persons" person-object="person" formatted-address-function="formattedAddress(aperson)">
        *Things being transcluded
    </search-result>
</div>
```
More Detail in:
http://teropa.info/blog/2015/06/09/transclusion.html
