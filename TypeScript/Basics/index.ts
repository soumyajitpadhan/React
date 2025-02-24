// Installing -> npm i -g typescript
// Version -> tsc -v
// Run -> tsc filename

// let greet: string = "Jai Shree Radhe"
// console.log(greet);

// let num: number = 5;
// console.log(num);

// let str: any = "Radhe Radhe"
// console.log(str);

// let flag: boolean = true;
// console.log(flag);


// let a : number = 5;
// a = "apple" // Error -> Type 'string' is not assignable to type 'number'
// To solved this error used multiple datatype
// let a: number | string | boolean = 5; // (| -> union by using this i put multiple datatype)
// console.log(a);
// a = "apple"
// console.log(a);



// Function
// Basic Function with Types
// function greetFn(name: string, age: number): string {
//     return `Your name is ${name} and age is ${age}`;
// }

// console.log(greetFn("Soumya", 22));


// // Function with Optional Parameters
// function greetFn1(name: string, age?: number): string {
//     return age ? `Your name is ${name} and age is ${age}` : `Your name is ${name}`;
//     // The ? after age means it is optional.
//     // If age is provided, it includes it in the message.
// }

// console.log(greetFn1("Soumya", 22));
// console.log(greetFn1("Soumya"));


// // Function with Default Parameters
// function multiply(a: number, b: number = 5): number {
//     return a * b;
// }

// console.log(multiply(5, 10));
// console.log(multiply(5));


// // Function with Union Types
// function format(input: string | number): string {
//     return `Formatted: ${input}`;
// }

// console.log(format("abc"));
// console.log(format(100));


// // Function with Return Type void
// function logMessage(message: string): void {
//     console.log(message);
// }

// logMessage("Radhe Radhe");



// // Arrow Function in TypeScript
// const square = (x: number): number => {
//     return x * x;
// }

// console.log(square(3));



// // Arrays
// let numArr: number[] = [1, 2, 3, 4, 5];
// let strArr: string[] = ['abc', 'def', 'ghi'];

// number[] → Array of numbers
// string[] → Array of strings

// for (let i: number = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);
// }

// // Array of Multiple Types (Union)
// let mixed: (number | string)[] = [1, "two", 3, "four"];
// // This array can contain both number and string.
// for (let i: number = 0; i < mixed.length; i++) {
//     console.log(mixed[i]);
// }



// Objects
// let person: { name: string, age: number, isStudent: boolean } = {
//     name: "Soumyajit",
//     age: 22,
//     isStudent: true
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);


// // Instead of repeating the object type everywhere, we can define a type alias.
// // Using type, we can reuse the Person type multiple times.

// type Person = {
//     name: string;
//     age: number;
//     isStudent?: boolean; // Sometimes, an object may not always have a certain property. We can mark it as optional using ?.
// };

// let person1: Person = { name: "Soumyajit", age: 22, isStudent: true }

// let person2: Person = { name: "Rahul", age: 22, isStudent: true }

// let person3: Person = { name: "Alice", age: 21 }

// console.log(person1.name);
// console.log(person2.name);
// console.log(person3.name);


// // Readonly Properties
// // We can make object properties readonly so that they can't be modified after initialization.
// type Car = {
//     readonly brand: string;
//     model: string;
// }

// let myCar: Car = { brand: "Toyota", model: "Corolla" };
// console.log(myCar);
// myCar.model = "Camry"; // Allowed
// console.log(myCar);
// // myCar.brand = "Honda" // Error: Cannot assign to 'brand' because it is a read-only property.


// // Objects with Functions (Methods)
// type User = {
//     name: string;
//     greet: () => string;
// };

// let user1: User = {
//     name: "Soumyajit",
//     greet: () => "Hello, Welcome!",
// }

// console.log(user1.greet());


// // Index Signatures (Dynamic Object Keys)
// // If we don't know the exact property names in advance, we can use an index signature.
// type PhoneBook = {
//     [key: string]: number;
// };

// let contacts: PhoneBook = {
//     John: 987646543,
//     Alice: 3325465465,
//     Bob: 312313231,
// };

// console.log(contacts["Alice"]);
// console.log(contacts.John);


// // Nested Objects
// type Address = {
//     city: string;
//     country: string;
// };

// type Customer = {
//     name: string,
//     age: number,
//     address: Address; // Nested object
// }

// let cust1: Customer = {
//     name: "Soumyajit",
//     age: 22,
//     address: {
//         city: "Bargarh",
//         country: "India"
//     }
// };

// console.log(cust1.address.city);



// Interface
interface Person {
    readonly name: string;
    age: number;
    isStudent?: boolean;
}

let person1: Person = { name: "Soumyajit", age: 22, isStudent: true };
console.log(person1.name);
// person1.name = "Rahul"; // Cannot assign to 'name' because it is a read-only property.

interface Greet {
    name: string;
    // sayHello: function(): string // This is incorrect syntax! TypeScript does not allow using function() as a type inside an interface.
    // sayHello(): string; // This is how you define a regular function in an interface
    sayHello: () => string;
}

let user: Greet = {
    name: "Soumyajit",

    sayHello: () => "Hello, Welcome!"

    // sayHello: () => {
    //     return `Hello, ${this.name}` ; // Arrow functions do not have their own this
    // }

    // sayHello: function () {
    //     return `Hello, ${this.name}`;
    // }

    // sayHello: function () {
    //     const arrowfn = () => {
    //         return `Hello, ${this.name}`; // Arrow function inherits 'this' from the regular function
    //     }
    //     return arrowfn(); // Must return the result to satisfy the interface
    // }
}

console.log(user.sayHello());


// Generic Types
type Container<T> = {
    value: T;
}
// Here, Container<T> is a generic type that can hold any type (T).

let stringContainer: Container<string> = { value: "Hello" };
let numberContainer: Container<number> = { value: 22 };

console.log(stringContainer.value);
console.log(numberContainer.value);


// Generic Function
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));


// Generic Function with Multiple Types
function combine<T, U>(a: T, b: U): string {
    return `${a} age is ${b}`;
}

console.log(combine<string, number>("Alice", 100));


// Generic Arrow Function
const identityArrow = <T>(value: T): T => {
    return value;
}

console.log(identityArrow<string>("Soumyajit"));