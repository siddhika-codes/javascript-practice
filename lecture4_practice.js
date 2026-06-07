// ARRAYS IN JAVA SCRIPT:
// Q1 · Access items
// What does each line print?
// let colors = ["red", "green", "blue"];
// console.log(colors[0]);
// console.log(colors[2]);
// console.log(colors[colors.length - 1]);
let colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[colors.length-1]);

// Q2 · Modify item
// What is printed after this runs?
// let fruits = ["apple", "mango", "banana"];
// fruits[1] = "grapes";
// console.log(fruits);
let fruits = ["apple", "mango", "banana"];
fruits[1] = "grapes";
console.log(fruits)
// in q2 it tells that we modify index 1 of fruits that is mango with new fruit that is grapes, as arrays are mutable in js.

// Q3 · Mixed types
// Is this valid in JS? What does it print?
// let mixed = ["hello", 42, true, null];
// console.log(mixed[1]);
// console.log(mixed.length);
// yes it is valid , as arrays are mutable in js.
// console.log(mixed[1]); in this it prints the value that is putted on index 1.
// console.log(mixed.length); in this it gives us the length of the array mixed.
let mixed = ["hello", 42, true, null];
console.log(mixed[1]);
console.log(mixed.length)

// Q4 · Nested array
// How do you access "mango" from this array?
// let data = ["apple", ["mango", "grape"], "banana"];
let data = ["apple", ["mango", "grape"], "banana"];
console.log(data[1][0])

// Q5 · Spot the difference
// What is the difference between these two?
// let a = ["hello"]; this is an array.
// let b = "hello"; this is a string.

// ARRAYS METHODS IN JAVA SCRIPT:
// What is printed after each step?
// let arr = ["a", "b", "c"];
// arr.push("d"); 
// console.log(arr); 
// arr.pop();
// arr.pop();
// console.log(arr);
let arr = ["a", "b", "c"];
arr.push("d");
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)

// Q2 · unshift() & shift()
// What does this print?
// let arr = ["b", "c"];
// arr.unshift("a");
// console.log(arr);
// arr.shift();
// console.log(arr);
let arR = ["b", "c"];
arR.unshift("a")
console.log(arR)
arR.shift();
console.log(arR)

// Q3 · indexOf()
// What is printed?
// let animals = ["cat", "dog", "rabbit", "dog"];
// console.log(animals.indexOf("dog"));
// console.log(animals.indexOf("fish"));
let animals = ["cat", "dog", "rabbit", "dog"];
console.log(animals.indexOf("dog"))
console.log(animals.indexOf("fish"))

// Q4 · includes()
// Write code to check if "mango" exists in this array and print true or false.
// let fruits = ["apple", "banana", "grapes"];
let fruitS = ["apple", "banana", "grapes"]; 
console.log(fruitS.includes("mango"))

// Q5 · join()
// What does this print?
// let words = ["I", "love", "JavaScript"];
// console.log(words.join(" ")); it prints with space.
// console.log(words.join("-")); it prints with dash -.
let words = ["I", "love", "JavaScript"];
console.log(words.join(" "));
console.log(words.join("-"));

// Q6 · splice()
// What does this print?
// let arr = ["a", "b", "c", "d"];
// arr.splice(1, 2); it delete from index 1 , and delete 2 value after index 1 that is 2 and 3 index
// console.log(arr);
let aRR = ["a", "b", "c", "d"];
aRR.splice(1,2);
console.log(aRR)

// ARRAYS WITH LOOPS:
// Q1 · Loop and print
// Print each item of this array using a for...of loop.
// let cities = ["Delhi", "Mumbai", "Raipur"];
let cities = ["Delhi", "Mumbai", "Raipur"];
for(let val of cities) {
    console.log(val)
}

// Q2 · Loop with index
// Print each item with its index like: 0 : Delhi
// let cities = ["Delhi", "Mumbai", "Raipur"];
let Cities = ["Delhi", "Mumbai", "Raipur"];
for(let i = 0; i < Cities.length; i++) {
    console.log(`${i} : ${Cities[i]}`)
}

// Q3 · Sum of array
// Write code to find the sum of all numbers in this array.
// let nums = [10, 20, 30, 40];
let nums = [10, 20, 30, 40];
let sum = 0;
for(let num of nums) {
    sum += num;
}
console.log(sum)

// Q4 · Template literal + array
// Loop through the array and print each fruit in uppercase using a template literal.
// let fruits = ["apple", "mango", "banana"];
let Fruits = ["apple", "mango", "banana"];
for(let fruit of Fruits) {
    console.log(`Fruit : ${fruit.toUpperCase()}`)
}





