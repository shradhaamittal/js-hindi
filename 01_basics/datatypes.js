/* Datatypes Types of data we can work with in JS:
 Broadly classified into 2 categories: (based on how they are stored in memory)

1. PRIMITIVE -call by value - not stored in heap memory but directly stored in stack memory and accessed by value

7 types: int, float, string, boolean, null, undefined, symbol(unique value that cannot be changed) */

const score =100
const score2=100.3

team="India"
isLoggedIn=true

const result=null
let userName;   //undefined

const id= Symbol("123")
const id2= Symbol("123")

console.log(id===id2)  //false because symbol creates unique value even if the description is same

/* 2. NON PRIMITIVE - call by reference - directly stored in heap memory and accessed by reference

3 types: objects, arrays, functions */

const heroes=["Superman","Batman","Spiderman"]

let myObj={ 
    name:"John",
    age:30,
    city:"New York" 
} //anything in curly braces is an object

function myFunc(){
    console.log("Hello World")
} 
// type of functions is also object in JS because they are stored in heap memory and accessed by reference


// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE

