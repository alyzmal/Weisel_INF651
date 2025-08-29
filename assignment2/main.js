let name = "Jane Doe";
let age = 24;
let student = true;

console.log(name + ", " + typeof(name));
console.log(age + ", " + typeof(age));
console.log(student + ", " + typeof(student));

let num1 = 24;
let num2 = 6;

console.log(num1 + " + " + num2 + " = " + (num1 + num2));
console.log(num1 + " - " + num2 + " = " + (num1 - num2));
console.log(num1 + " * " + num2 + " = " + (num1 * num2));
console.log(num1 + " / " + num2 + " = " + (num1 / num2));

let str = "Hello, world!"

console.log("The length of string str is " + str.length);
console.log("The first character of string str is " + str.at(0));
console.log("The last character of string str is " + str.at(-1));

let negative = -16;

console.log("The square root of " + negative + " is " + Math.sqrt(negative));
console.log(negative + " squared is " + Math.pow(negative, 2));
console.log("The absolute value of " + negative + " is " + Math.abs(negative));

let num3 = 15;
let num4 = 17;

console.log(num3 + (num3 < num4 ? " < " : (num3 == num4 ? " == " : " > ")) + num4);

let bool1 = true;
let bool2 = false;

console.log(bool1 + " AND " + bool2 + " is " + (bool1 && bool2));
console.log(bool1 + " OR " + bool2 + " is " + (bool1 || bool2));
console.log("NOT " + bool1 + " is " + (!bool1));
console.log("NOT " + bool2 + " is " + (!bool2));

let firstName = "Jane";
let lastName = "Doe";
let welcomeText = `Welcome, ${firstName} ${lastName}!`;

console.log(welcomeText);
