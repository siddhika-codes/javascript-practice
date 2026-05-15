// operators and conditional statements.

// Q1. Store User Details
// Create variables for:
// userName
// age
// isStudent
// city
// Print them.

let username = "Siddhika Vinita Aajna";
let age = 21;
let isStudent = "yes";
let city = "Harda";

console.log(username)
console.log(age)
console.log(isStudent)
console.log(city)

// Q2. Product Information
// Store:
// product name
// price
// inStock (true/false)
// Print:
// "The product Iphone costs 70000"
let productname = "Iphone";
let price = 70000;
let inStock = true;

console.log("The product", productname, "costs", price)

// Q3. Const Practice
// Create a constant:
// const companyName
// Try changing it and observe the error.
const companyName = "Ferrero Rocher";

console.log(companyName)

// Q4. let vs var
// Create:
// let score = 10
// var marks = 20
// Update both values and print.
let score = 10;
var marks = 20;

score = 35;
marks = 45;

console.log(score)
console.log(marks)

// Q5. Real World Salary Storage
// Store:
// employee name
// monthly salary
// bonus
// total salary after bonus
// Print all.

let Store = "Kirana Store";
let employeename = "Abhishek Sharma";
let monthlysalary = 75000;
let bonus = 10;
let totalsalaryafterbonus = 82500;

console.log(Store)
console.log(employeename)
console.log(monthlysalary)
console.log(bonus)
console.log(totalsalaryafterbonus)

// PART 2 — Arithmetic Operators

// Q6. E-commerce Bill Calculator
// A customer buys:
// Shoes = 2000
// Bag = 1500
// Add total bill.
let Shoes = 2000;
let Bag = 1500;
let final = Shoes + Bag

console.log(final)

// Q7. Discount Calculator
// Product price = 5000
// Discount = 20%
// Find final price.
let productprice = 5000;
let Discount = 20;
let finaloutput = 5000*20/100

console.log(finaloutput)

// Q8. Food Delivery App
// Pizza price = 350
// Delivery charge = 50
// Calculate total payable amount.
let Pizzaprice = 350;
let Deliverycharge = 50;
let total = 350+50

console.log(total)

// Q9. Split Bill
// Restaurant bill = 2400
// 4 friends are paying equally.
// Find amount per person.
let Restaurantbill = 2400;
let splitamount = 2400/4

console.log(splitamount)

// Q10. Student Percentage
// Marks:
// English = 80
// Maths = 90
// Science = 70
// Find total and percentage.
let English = 80;
let Maths = 90;
let Science = 70;
let sumtotal = 80+90+70
let percentage = 300/500*100

console.log(sumtotal)
console.log(percentage)

// PART 3 — Assignment Operators

// Q11. Wallet Balance Update
// Initial wallet balance = 1000
// Add 500
// Subtract 200
// Multiply by 2
// Print final balance.
let Initialwalletbalance = 1000;

console.log(1000 + 500)
console.log(1000 - 200)
console.log(1000 * 2)
console.log()

// Q12. Game Score Tracker
// Initial score = 50
// Use:
// +=
// -=
// *=
// Update score after different game rounds.
let Inititalscore = 50;

console.log(Inititalscore += 20)
console.log(Inititalscore-=20)
console.log(Inititalscore*=2)

// Q13. Monthly Savings
// Initial savings = 0
// Add:
// salary
// freelance income
// Subtract:
// expenses
// Print final savings.
let Initialsavings = 0;
let salary = 75000;
let freelanceincome = 25000;
let expenses = 25000;
let Grandtotal = 75000 + 25000 - 25000

console.log(Grandtotal)

// PART 4 — Comparison Operators
// Q14. Age Eligibility Check
// Check if age is greater than or equal to 18.
let Age = 21;
if(Age >= 18)

console.log("Age is", Age)

// Q15. Login Password Match
// Store:
// enteredPassword
// realPassword
// Check if both are same.
let enteredPassword = "vinita23";
let realPassword = "vinita2317";
if(enteredPassword == realPassword) {
    console.log("successful")
} else { console.log("not successful")
}

// Q16. Product Stock Check
// Check if stock is equal to 0.
let Stock = 62300;
if(Stock == 0) {
    console.log("stock is out")
} else {
    console.log("stock is available")
}

// Q17. Exam Pass Check
// Marks = 35
// Check:
// greater than 33
// less than 33
let Marks = 35;
if(Marks > 35) {
    console.log("greater")
} else { 
    console.log("marks are less")
}

// Q18. Salary Comparison
// Compare two employees’ salaries.
let salaryA = 45000;
let salaryB = 56700;
if(salaryA > salaryB) {
    console.log("salary of employee A is higher", salaryA)
} else {
    console.log("salary of employee B is higher", salaryB)
}

// PART 5 — Logical Operators
// Q19. Website Login System
// User can login only if:
// email is correct
// AND
// password is correct
let realemail = "siddhika76@gmail.com";
let Passwordreal = "siddhika87";

let enteredemail = "vinita65@gmail.com";
let Passwordentered = "vinita34";

if(realemail == enteredemail && Passwordreal == Passwordentered) {
    console.log("successful login")
} else {
    console.log("not successful")     
}


// Q20. Scholarship Eligibility
// Student gets scholarship if:
// marks > 85
// AND
// attendance > 75
let scholarshipmarks = 89;
let attendance = 79;

if(scholarshipmarks > 85 && attendance > 75) {
    console.log("eligible")
} else {
    console.log("not eligible")
}

// Q21. OTT Platform Access
// User can watch movie if:
// hasSubscription
// OR
// hasFreeTrial
let hasSubscription = true;
let hasFreeTrial = false;
if(hasSubscription || hasFreeTrial) {
    console.log("can watch")
} else {
    console.log("cannot watch")
}

// // Q22. Online Exam Restriction
// // Student cannot enter if:
// // cheatingDetected = true
// // Use NOT operator.
let cheatingDetected = true;
if (!cheatingDetected) {
    console.log("Can enter exam");
} else {
    console.log("Entry denied");
}



