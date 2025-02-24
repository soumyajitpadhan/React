// Installing -> npm i -g typescript
// Version -> tsc -v
// Run -> tsc filename
var person1 = { name: "Soumyajit", age: 22, isStudent: true };
console.log(person1.name);
var user = {
    name: "Soumyajit",
    sayHello: function () { return "Hello, Welcome!"; }
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
};
console.log(user.sayHello());
// Here, Container<T> is a generic type that can hold any type (T).
var stringContainer = { value: "Hello" };
var numberContainer = { value: 22 };
console.log(stringContainer.value);
console.log(numberContainer.value);
// Generic Function
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(100));
// Generic Function with Multiple Types
function combine(a, b) {
    return "".concat(a, " age is ").concat(b);
}
console.log(combine("Alice", 100));
// Generic Arrow Function
var identityArrow = function (value) {
    return value;
};
console.log(identityArrow("Soumyajit"));
