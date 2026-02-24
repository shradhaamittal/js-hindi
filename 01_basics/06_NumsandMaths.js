const score=400
const balance= new Number(1000)

console.log(balance)
console.log(score.toString())
console.log(typeof score)

console.log(balance.toFixed(2)) // console.log(score.toFixed(2)) // error because score is a primitive number, not a Number object
// fixes the number to 2 decimal places
console.log(balance.toPrecision(3)) // console.log(score.toPrecision(3)) // error because score is a primitive number, not a Number object
// formats the number to a specified length (3 in this case)

console.log(Number.isInteger(score)) // true
console.log(Number.isInteger(balance)) // false because balance is a Number object, not a primitive number

console.log(Number.isNaN(score)) // false
console.log(Number.isNaN(balance)) // false

console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.sqrt(16)) // 4
console.log(Math.pow(2, 3)) // 8
console.log(Math.max(1, 5, 3)) // 5
console.log(Math.min(1, 5, 3)) // 1
console.log(Math.random()) // random number between 0 and 1