// // Loops in JavaScript.
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }


// // Q2 · Write it Write a while loop that prints all even numbers from 2 to 10.
// let i = 2;
// while(i <= 10) {
//     if(i%2 === 0) {
//         console.log(i);
//     }
//     i ++;
// }

// // Q3 · Fix the bug
// // This loop runs forever. Why? How do you fix it?
// // let count = 0;
// // while (count < 5) {
// //   console.log(count);
// // }

// let count = 0;
// while(count < 5) {
//     console.log(count);
//     count ++
// }

// // Q4 · for...of Use a for...of loop to print each character of the string "hello" on a new line.
// let str = "hello";
// for(let val of str) {
//     console.log(val)
// }

// // Q5 · Nested loops
// // What does this print? (think before running!)
// // for (let i = 1; i <= 3; i++) {
// //   for (let j = 1; j <= 2; j++) {
// //     console.log(i + "-" + j);
// //   }
// // }
// for(let i = 1; i <= 3; i ++) {
//     for(let j = 1; j <= 2; j ++) {
//         console.log(i, j);
//     }
// }


// // Strings in JavaScript.
// // Q1 · Output prediction
// // What will each line print?
// // let name = "Siddhika";
// // console.log(name.length);
// // console.log(name[0]);
// // console.log(name[name.length - 1]);
// let nameS = "Siddhika";
// console.log(nameS.length)
// console.log(nameS[0], nameS[3])
// console.log(nameS[nameS.length-1])

// // Q2 · Concatenation vs addition
// // What does each line print? Why are they different?
// // console.log("3" + 3);
// // console.log(3 + 3);
// "concatention" = "it means that we can add string with any other value also like, integer, floating"

// // Q3 · Immutability
// // Will this change the string? What is printed?
// // let word = "hello";
// // word[0] = "H";
// // console.log(word);
// "No strings are not mutable . so we can't change word's [0] indices with any other word".

// // Q4 · Escape characters
// // Write a string that prints exactly: She said "hello!"
// // Show answer

// // Q5 · Loop a string
// // Use a loop to print each character of "JS" along with its index, like:
// // 0 : J
// // 1 : S
// let string = "JS";
// for(let ch of string) {
//     console.log(string[0], ":", string(ch))
//     console.log(string[1], ":", string(ch))
// }

// // Template Literals questions.
// Q1 · Rewrite it
// Rewrite this using a template literal:
// let city = "Bilaspur";
// let msg = "I live in " + city + "!";

let city = "Bilaspur";
let merge = (`I live in ${city} !`)
console.log(merge)

// Q2 · Expression inside
// What does this print?
// let a = 10, b = 5;
// console.log(`Sum is ${a + b}, product is ${a * b}`);

let a = 10;
let b = 5;
let sum = (a+b);
let product = (a*b);
console.log(`sum is ${sum} and product is ${product}`)
"In this line of code it tells us that -- after adding the code to proceed under variable we should add the whole code into literals templates , that help us in not writing long code + not adding the expressions in a way that is -- "+" hope you get what i'am trying to say."

// Q3 · Multi-line
// Write a multi-line address using a template literal. It should print on 3 separate lines — no \n allowed.
let address = `anand nagar, khirkiya;
red loby, idr;
circle law, bhpl`
console.log(address)

// Q4 · Spot the error
// What's wrong here? Fix it.
// let name = "Sid";
// console.log("Hello ${name}");
let namev = "Sid";
console.log(`Hello ${namev}`)

// Q5 · Write it
// Using a template literal, print: My name is Siddhika and I am learning JS!
// Use two variables: name and subject.
let nameR = "siddhika";
let subject = "JS!";
console.log(`My name is ${nameR} and I am learning ${subject}`)

// Strings methods questions.
// Q1 · Output prediction
// What does each line print?
// let s = "  Hello World  ";
// console.log(s.trim());
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());

let s = "  Hello World  ";
console.log(s.trim())
// remove whitespaces extra spaces from strings that is from left side and right side, not from in between.
console.log(s.toLowerCase())
// it coverts the words of strings into lowercase
console.log(s.toUpperCase())
// it coverts the words of strings into uppercase

// Q2 · slice()
// What is the output?
// let str = "JavaScript";
// console.log(str.slice(0, 4));
// console.log(str.slice(4));
let strJ = "JavaScript";
console.log(strJ.slice(0, 4))
// it print the sring value between 0 index to index 3, as it it doesn't print the last index .
console.log(strJ.slice(4))
// it only print single value of string that come at index 4

// Q4 · replace()
// Write code to change "Today was a bad day" → "Today was a good day"
let Word = "Today was a bad day";
console.log(Word.replace("Today was a bad day", "Today was a good day"))

// Q5 · split()
// What does this return?
// let csv = "apple,banana,mango";
// let fruits = csv.split(",");
// console.log(fruits);
// console.log(fruits[1]);

// 
// Q6 · Chain methods
// What does this print? (methods are chained one after another)
// let str = "  hello world  ";
// console.log(str.trim().toUpperCase());

let strW = "  hello world  ";
console.log(strW.trim().toUpperCase())
// it first remove all the extra spaces of strings from left and right side, then convert the strings words into upper case
