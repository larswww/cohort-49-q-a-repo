// Pre-ES6 features: Function expressions, var, and string concatenation

// Function expression
var greet = function(name) {
    name = name || 'Guest';
    return 'Hello, ' + name + '! Welcome to pre-ES6.';
  };
  
  // Object property access
  var user = { firstName: 'Alice', lastName: 'Doe' };
  console.log(greet(user.firstName + ' ' + user.lastName)); // Output: Hello, Alice Doe! Welcome to pre-ES6.
  
  // Concatenating arrays with .concat method
  var numbers = [1, 2, 3];
  var newNumbers = numbers.concat([4, 5]);
  console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
  
  // Function with arguments object for variable number of parameters
  var sum = function() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  };
  console.log(sum(1, 2, 3, 4)); // Output: 10
  
  // Using var for function-scoped variables
  var message = 'Variable scopes are different.';
  message = 'Pre-ES6 only has function-scoped variables.';
  
  // Pros:
  // - Broad compatibility without needing transpilation
  // - Familiar syntax for developers used to older versions of JavaScript
  
  // Cons:
  // - More verbose and less readable code
  // - Limited functionality compared to ES6+
  // - Scope management can be challenging due to var's function scope