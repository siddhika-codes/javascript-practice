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