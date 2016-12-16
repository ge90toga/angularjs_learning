### Compile and Link
- The Compile and Link term in angular is not what they do in computer science!

### How it works?
- Compile basically just instantiate template;
- you can modify the template during compile but it is rarely used;
- linking is the actual process of converting "compiled" directive to "view".
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
        },
        compile: function(elem, attrs){
            console.log(elem); // change to elem.html();
            // compile function run only once for same directive
            // It just "initialise" the template and allow you to do some change here to element and attr (rarely used)
            return{ // Link goes here, it can be divided as pre-linking and post-linking

                pre: function (scope,elements,attrs) {
                    // pre-linking runs at the opening tag
                },

                post: function(scope, elements, attrs) {
                    // post-linking runs at the ending tag (Usually used here!)
                    console.log('Post-linking...');
                    console.log(scope);
                    // we can change attribute, scope(model), element during linking
                    if (scope.personObject.name == 'Jane Doe') {
                        elements.removeAttr('class');
                    }
                    console.log(elements);
                }
            }
        },
    }
});
```