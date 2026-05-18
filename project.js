// Project 1 — Simple Login System
// Take:
// email
// password
// Check:
// correct email
// correct password
// Print:
// Login success
// Wrong credentials
let enteredEmail = "vinita2317@gmail.com";
let enteredPassword = "vinita2317";

let correctEmail = "vinita2314@gmail.com";
let correctPassword = "vinita2314";

if(enteredEmail == correctEmail && enteredPassword == correctPassword) {
    console.log("Login Success")
} else {
    console.log("Wrong Credentials")
}

// Project 2 — E-commerce Cart
// Store:
// product prices
// quantity
// discount
// Calculate:
// total
// discount amount
// final bill
let productprice = 500;
let quantity = 5;
let discount = 10;

let total = productprice*quantity
console.log(total)
let discountamount = productprice*quantity/10
console.log(discountamount)
let finalbill = total-discountamount
console.log(finalbill)

// Project 3 — Food Delivery Eligibility
// Check:
// restaurant open
// distance less than 10 km
// user logged in
// Then decide:
// "Order Accepted"
let restaurantOpen = true;
let distance = 10;
let userLoggedin = true;
if(restaurantOpen && distance <= 10 && userLoggedin) {
    console.log("Order Accepted")
} else {
    console.log("Order Denied")
}

// Project 4 — Salary Bonus Calculator
// Input:
// employee salary
// years of experience
// Conditions:
// high salary + high experience → big bonus
// otherwise smaller bonus
let employeeSalary = 95000;
let experienceYear = 3;
if(employeeSalary >= 85000 && experienceYear >= 2) {
    console.log("big bonus")
} else {
    console.log("small bonus")
}

// Project 5 — Student Result Portal
// Store:
// marks of 5 subjects
// Calculate:
// total
// percentage
// grade
// pass/fail
let Hindi = 89;
let English = 84;
let Science = 78;
let Socialscience = 79;
let Computer = 93;

let totalmarks = Hindi + English + Science + Socialscience + Computer
console.log(totalmarks)
let percentage = totalmarks/500*100
console.log(percentage)
if(percentage >= 33) {
    console.log("PASS")
} else {
    console.log("FAIL")
}
if(percentage >= 90) {
    console.log("A")
} else if(percentage >= 80) {
    console.log("B")
} else if(percentage >= 70) {
    console.log("C")
} else if(percentage >= 60) {
    console.log("D")
} else {
    console.log("FAIL")
}
