// Function that creates a large object and returns a closure
function createClosure() {
    // Simulating a large object
    let largeObject = new Array(1000000).fill('Some large data');
    
    // Closure that references the large object
    return function() {
        console.log(largeObject[0]);
    };
}

// Global variable holding the closure
let leakyClosure = createClosure();
leakyClosure = null
// The largeObject is not garbage collected because leakyClosure holds a reference to it