const arr = [1, 2];
const newArr = [...arr];
newArr.push(3);
console.log(arr); // [1, 2, 3]

// TODO make it possible to add as many numbers together as desired
function sum(a, b, c) {
    arguments
    return a + b
  }
  sum(1, 2); // 3

const sumES6 = (a, b, ...rest) => {
    if (rest.length) console.log('Big calculation!')
    let total = 0
    for (const number of rest) {
      total += number
    }
    return total
}

console.log(sumES6(1, 2))
console.log(sumES6(1, 2,3 ,9, 12))
