// Q: 1 Check if a number is positive or negative.

var userPrompt = Number(prompt('Enter A Number'));

if (userPrompt > 0) {
    alert(userPrompt + ' Is Positive Number');
} else if (userPrompt < 0) {
    alert(userPrompt + ' Is Negative Number');
} else if (userPrompt == 0) {
    alert('Please Enter A Number');
}


// Q: 2 Check if a number is even or odd.


var checkEvenOddNumber = Number(prompt('Enter A Number'));

if (checkEvenOddNumber % 2 === 0) {
    alert(checkEvenOddNumber + ' Is Even Number');
} else if (checkEvenOddNumber % 2 === 1) {
    alert(checkEvenOddNumber + ' Is Odd Number');
}


// Q: 3 Check if a person's age is 18 or above. If yes, print "Eligible to vote", otherwise print "Not eligible to vote".

var userName = prompt('Enter Your Name');
var userAge = Number(prompt('Enter Your Age'))

if (userAge >= 18) {
    alert(userName + ' You Are Eligible');
} else if (userAge < 18) {
    alert(userName + " You Are Not Eligible")
}

// Q: 4 Check if a student has passed. Passing marks are 50.

var studentName = prompt('Enter Your Name');
var studentMarks = Number(prompt('Enter Your Mrks'));

if (studentMarks > 100) {
    alert(studentName + ' Enter Correct Marks')
}
else if (studentMarks >= 90) {
    alert(studentName + " Grade is A+")
}
else if (studentMarks >= 80) {
    alert(studentName + " Grade is A")
}
else if (studentMarks >= 70) {
    alert(studentName + " Grade is B")
}
else if (studentMarks >= 60) {
    alert(studentName + " Grade is C")
} else if (studentMarks >= 50) {
    alert(studentName + " Grade is D Pass")
} else if (studentMarks < 50) {
    alert(studentName + " is Fail")
}


// Q: 5 Check if a number is greater than 100. If yes, print "Large Number", otherwise print "Small Number".


var userNumber = Number(prompt('Enter A Number'));

if (userNumber == 100) {
    alert(userNumber + ' Is Equal To 100');
} else if (userNumber > 100) {
    alert(userNumber + ' Is A Largest Number to 100')
} else (userNumber < 100) {
    alert(userNumber + ' Is A Smallest Number to 100');
}


// Q: 6 Check if a password is equal to "admin123". If yes, print "Login Successful", otherwise print "Incorrect Password".

var userPassword = prompt('Enter Your Password');

if (userPassword == 'admin123') {
    alert('Login Successful')
} else {
    alert('Incorrect Password')
}


// Q: 7 Check if a user has enough balance to buy an item. If the balance is greater than or equal to the item price, print "Purchase Successful", otherwise print "Insufficient Balance".

var userBalance = Number(prompt('Item Price : 200 Rs'));

if (userBalance < 200) {
    alert('Insufficient Balance');
} else (userBalance >= 200) {
    alert('Purchase Successful');
}


// Q: 8 Check if a temperature is above 30°C. If yes, print "It's Hot", otherwise print "Weather is Pleasant".

var userTemp = prompt('Enter Temperature');

if (userTemp >= 30) {
    alert(userTemp + '°C' + " " + " It's Hot");
} else {
    alert(userTemp + '°C' + " " + ' Weather is Pleasant');
}

// Q: 9 Check if a number is divisible by 5. 

var userNumber = Number(prompt('Enter Your Number'));

if (userNumber % 5 === 0) {
    alert(userNumber + ' Is Divisable');
} else {
    alert(userNumber + ' Is Not Divisable');
}


// Q: 10 Check if a traffic light is "green". If yes, print "Go", otherwise print "Stop".


var userResp = prompt('Enter A Traffic Light Color')

if (userResp === "green") {
    alert('The Light is ' + userResp + ' Go');
} else if (userResp === "yellow") {
    alert('The Light is ' + userResp + ' Go Slowly')
} else if (userResp === "orange") {
    alert('The Light is ' + userResp + " Strat Your Car Engine")
} else {
    alert('Stop');
}


// Q: 11 Check if a username is "admin". If yes, print "Welcome Admin", otherwise print "Access Denied".

var userName = prompt('Enter Your Name');

if (userName === "admin") {
    alert('WelCome ' + userName);
} else {
    alert('Access Denied')
}


// Q: 12 Check if a person's height is 170 cm or more. If yes, print "Tall", otherwise print "Average Height".

var userHeight = Number(prompt('Enter Your Height'));

if (userHeight >= 170) {
    alert('Tall');
} else if (userHeight < 1) {
    alert('Invalid Height')
} else {
    alert('Avergae Height')
}


// Q: 13 Check if a user is logged in (true or false). If logged in, print "Welcome Back", otherwise print "Please Login".

var isActive = false

if (isActive == true) {
    alert('Welcome Back')
} else {
    alert('Please Login')
}


// Q: 14 Check if a person's age is 60 or above. If yes, print "Senior Citizen", otherwise print "Not a Senior Citizen".


var citizenAge = Number(prompt('Enter Your Age'));

if (citizenAge >= 60) {
    alert('Senior Citizen');
} else {
    alert('Not A Senior Citizen')
}


// Q: 15 Check if a shop is open (true or false). If open, print "Shop is Open", otherwise print "Shop is Closed".


var isOpen = true;

if (isOpen == true) {
    alert('Shop is Open');
} else {
    alert('Shop is Closed');
}


// Completed All Questions--------------------------------------------------------------------------