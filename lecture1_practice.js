// part 1: Basic practice
// que1 declare questions.
// Create variables:
// name (string)
// age (number)
// isStudent (boolean)
//  Print them using console.log()

let name = "siddhika";
let age = 21;
let isStudent = true;

console.log(name)
console.log(age)
console.log(isStudent)

// Q2. Change variable value
// Create a variable city = "Delhi"
// Change it to "Mumbai"
//  Print both values

let city = "Delhi";

console.log(city)
city = "Mumbai";
console.log(city)

// Q3. Use const
// Create a constant country = "India"
//  Try changing it (observe error)

const country = "India"
console.log(country)


// Q4. Data types check
// Create variables:
// "Hello"
// 25
// true
// null
// undefined
//  Use typeof to print their types

let s = "Hello";
let v = 25;
let c = true;
let d = null;
let e = undefined;

console.log(typeof(s))
console.log(typeof(v))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))

// Part 2: Real Understanding
// Q5. Combine variables
// Create:
// firstName = "Siddhika"
// lastName = "Bishnoi"
//  Print full name using:
// "My name is Siddhika Bishnoi"

let firstName = "siddhika";
let lastName = "Bishnoi";
let add = firstName + " "  + lastName

console.log(add)

// Q6. Simple calculation
// Create:
// a = 10
// b = 5
// Print:
// addition
// subtraction
// multiplication
// division

let a = 10;
let b = 5;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

// Q7 (Updated – No AND/OR)
// Create variables:
// name = "Siddhika"
// age = 21
// city = "Mumbai"
//  Print:
// My name is Siddhika, I am 21 years old, and I live in Mumbai.

let Name = "siddhika";
let Age = 21;
let City = "Mumbai";

console.log("My name is " + Name + " , I am " + Age + " Years old, and I live in " + City + ".")

// Q8 (Type Conversion – important)
// let num = "50";
//  Convert to number and print:
// 60

let n = "50";
let converted = Number(n)

console.log(converted + 10)
console.log(typeof(converted))


//  Q9 (Undefined vs Null)
// Create one variable without value
// One with null
//  Print both + their typeof

let k = null;
let m; 
console.log(k)
console.log(typeof(k))
console.log(m)
console.log(typeof(m))

//  Q10 (Mini Task )
// Create:
// productName = "Laptop"
// price = 50000
// quantity = 2
// Print:
// Total cost of Laptop is 100000

let productName = "Laptop";
let price = 50000;
let quantity = 2;

let total = price * quantity

console.log("Total cost of " +  productName + " is " + total);






