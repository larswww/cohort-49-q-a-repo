// ES6+ features: Arrow functions, const/let, template literals, spread/rest operators, and destructuring

// Arrow function with default parameters and template literals
const greet = (name = 'Guest') => `Hello, ${name}! Welcome to ES6+.`;

// Destructuring assignment
const user = { firstName: 'Alice', lastName: 'Doe' };
const { firstName, lastName } = user;
console.log(greet(`${firstName} ${lastName}`)); // Output: Hello, Alice Doe! Welcome to ES6+.

// Spread operator for array expansion
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

// Rest operator for function parameters
const sum = (...args) => args.reduce((acc, current) => acc + current, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10

// Using let for block-scoped variable and const for constants
let message = 'Changing values';
message = 'ES6+ allows block-scoped variables.';
const PI = 3.14;

// Pros:
// - Cleaner and more concise syntax
// - Enhanced functionality like destructuring and rest/spread operators
// - Better scope control with let and const

// Cons:
// - May need transpilation for older browser support
// - New syntax and features can have a learning curve