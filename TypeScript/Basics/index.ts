let greet: string = "Jai Shree Radhe"
console.log(greet);

let num: number = 5;
console.log(num);

let str: any = "Radhe Radhe"
console.log(str);

let flag: boolean = true;
console.log(flag);


// let a : number = 5;
// a = "apple" // Error -> Type 'string' is not assignable to type 'number'
// To solved this error used multiple datatype
let a: number | string | boolean = 5; // (| -> union by using this i put multiple datatype)
console.log(a);
a = "apple"
console.log(a);

// Function
// Basic Function with Types
function greetFn(name: string, age: number): string {
    return `Your name is ${name} and age is ${age}`;
}

console.log(greetFn("Soumya", 22));


// Function with Optional Parameters
function greetFn1(name: string, age?: number): string {
    return age ? `Your name is ${name} and age is ${age}` : `Your name is ${name}`;
    // The ? after age means it is optional.
    // If age is provided, it includes it in the message.
}

console.log(greetFn1("Soumya", 22));
console.log(greetFn1("Soumya"));


// Function with Default Parameters
function multiply(a: number, b: number = 5): number {
    return a * b;
}

console.log(multiply(5, 10));
console.log(multiply(5));


// Function with Union Types
function format(input: string | number): string {
    return `Formatted: ${input}`;
}

console.log(format("abc"));
console.log(format(100));


// Function with Return Type void
function logMessage(message: string): void {
    console.log(message);
}

logMessage("Radhe Radhe");


// Arrow Function in TypeScript
const square = (x: number): number => {
    return x * x;
}

console.log(square(3));


// Arrays
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ['abc', 'def', 'ghi'];

// number[] → Array of numbers
// string[] → Array of strings

for (let i: number = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}

// Array of Multiple Types (Union)
let mixed: (number | string)[] = [1, "two", 3, "four"];
// This array can contain both number and string.
for (let i: number = 0; i < mixed.length; i++) {
    console.log(mixed[i]);
}
