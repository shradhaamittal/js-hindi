 // date is an object 

const now = new Date() // current date and time
console.log(now)

/*const specificDate = new Date('2020-01-01') // specific date
console.log(specificDate)

const timestamp = Date.now() // current timestamp in milliseconds since January 1, 1970
console.log(timestamp)

console.log(now.toDateString()) // converts date to a human-readable string

console.log(now.getFullYear()) // gets the year

console.log(specificDate.getTime()) // gets the timestamp of the specific date in milliseconds since January 1, 1970
*/
console.log(Date.now()/1000) //this will give decimal value

console.log(Math.floor(Date.now()/1000)) // this will give the current timestamp in seconds (integer value)