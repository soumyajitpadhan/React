var greet = "Jai Shree Radhe";
console.log(greet);
var num = 5;
console.log(num);
var str = "Radhe Radhe";
console.log(str);
var flag = true;
console.log(flag);
// let a : number = 5;
// a = "apple" // Error -> Type 'string' is not assignable to type 'number'
// To solved this error used multiple datatype
var a = 5; // (| -> union by using this i put multiple datatype)
console.log(a);
a = "apple";
console.log(a);
// Function
// Basic Function with Types
function greetFn(name, age) {
    return "Your name is ".concat(name, " and age is ").concat(age);
}
console.log(greetFn("Soumya", 22));
// Function with Optional Parameters
function greetFn1(name, age) {
    return age ? "Your name is ".concat(name, " and age is ").concat(age) : "Your name is ".concat(name);
    // The ? after age means it is optional.
    // If age is provided, it includes it in the message.
}
console.log(greetFn1("Soumya", 22));
console.log(greetFn1("Soumya"));
// Function with Default Parameters
function multiply(a, b) {
    if (b === void 0) { b = 5; }
    return a * b;
}
console.log(multiply(5, 10));
console.log(multiply(5));
// Function with Union Types
function format(input) {
    return "Formatted: ".concat(input);
}
console.log(format("abc"));
console.log(format(100));
// Function with Return Type void
function logMessage(message) {
    console.log(message);
}
logMessage("Radhe Radhe");
// Arrow Function in TypeScript
var square = function (x) {
    return x * x;
};
console.log(square(3));
// Arrays
var numArr = [1, 2, 3, 4, 5];
var strArr = ['abc', 'def', 'ghi'];
// number[] → Array of numbers
// string[] → Array of strings
for (var i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}
// Array of Multiple Types (Union)
var mixed = [1, "two", 3, "four"];
// This array can contain both number and string.
for (var i = 0; i < mixed.length; i++) {
    console.log(mixed[i]);
}
