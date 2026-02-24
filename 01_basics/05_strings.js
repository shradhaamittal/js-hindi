const name= "hello world"
const name2="i'm shradha"

const name3= new String("hello world") //string object created using constructor function (not recommended to use)

/*console.log(name+name2 + "i'm sde") //old syntax

console.log(`${name} ${name2} i'm sde`) //new syntax using template literals (backticks) and ${} for variable interpolation

console.log(name.length) //length of the string
console.log(name.toUpperCase()) //convert to uppercase
console.log(name.toLowerCase()) //convert to lowercase
console.log(name.includes("world")) //check if string includes a substring
console.log(name.split(" ")) //split the string into an array of substrings based on the delimiter (space in this case)
*/
console.log(name2[0])
console.log(name2.charAt(0)) //both will give the same result 
console.log(name2.indexOf("s")) //index of first occurrence of "s"
console.log(name2.lastIndexOf("s")) //index of last occurrence of "s"
console.log(name2.slice(0,5)) //slice the string from index 0 to 5 (not including 5)
console.log(name2.substring(0,5)) //same as slice but does not accept negative indices
console.log(name2.replace("shradha","sde")) //replace "shradha" with "sde"
console.log(name2.trim()) //remove whitespace from both ends of the string
console.log(name2.startsWith("i'm")) //check if string starts with "i'm"
console.log(name2.endsWith("sde")) //check if string ends with "sde"
