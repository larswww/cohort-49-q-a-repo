// Example to Illustrate Different Scopes in JavaScript

// Global Scope
var globalVar = "I am a global variable";

function showGlobalScope() {
  // This function can access the global variable
  console.log("Accessing globalVar from showGlobalScope:", globalVar);
}

function showFunctionScope() {
  // Function Scope
  var functionScopedVar = "I am a function scoped variable";
  console.log("Accessing functionScopedVar from showFunctionScope:", functionScopedVar);
  
  // Trying to access functionScopedVar outside will throw an error
  // console.log(functionScopedVar); // Uncaught ReferenceError: functionScopedVar is not defined
}

function showBlockScope() {
  // Block Scope (ES6 - using let or const)
  if (true) {
    let blockScopedVar = "I am a block scoped variable";
    console.log("Accessing blockScopedVar from inside the block:", blockScopedVar);
  }
  
  // Trying to access blockScopedVar outside will throw an error
  // console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined
}

function showClosure() {
  // Closure Example
  function outerFunction() {
    var outerVar = "I am from outerFunction";
    
    function innerFunction() {
      // innerFunction can access outerVar, thanks to closure
      console.log("Accessing outerVar from innerFunction:", outerVar);
    }
    
    return innerFunction;
  }
  
  var inner = outerFunction(); // outerFunction has returned
  inner(); // innerFunction still can access outerVar
}

// Running the functions
showGlobalScope();
showFunctionScope();
showBlockScope();
showClosure();

// Instructions for Debugging:
// 1. Set breakpoints inside each function to observe the scope.
// 2. Run the debugger and step through each function call.
// 3. Observe how variables are accessible within their respective scopes.
// 4. Notice how trying to access scoped variables outside their scope results in errors (uncomment the error lines to test).