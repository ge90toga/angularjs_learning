# pass function
- we can use '&' to pass function to isolated scope in custom directives:
In directive:
```javascript
// create a custom directive:
myApp.directive("searchResult", function() {
    return {
        restrict: 'AE', //attribute and element tag gets convert to the following template others: C class M comment
        templateUrl: 'directives/search-result.html', // use a template url
        replace: true ,// replace the parent tag or not
        scope:{ // isolated scope
            personObject:'=', // pass a = two way binding (type of hole! is a object we don't need {{}})
            formattedAddressFunction: "&" // pass a function
        }
    }
});
```
In template:
```html
<search-result person-object="person" 
formatted-address-function="formattedAddress(aperson)"></search-result>
```
a person is just a way to describe arguments passed in

In directive template:
```html
    <p class="list-group-item-text">
    <!-- : map object to parameter-->
        {{ formattedAddressFunction({ aperson: personObject }) }}
    </p>
```