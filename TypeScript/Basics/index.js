// Installing -> npm i -g typescript
// Version -> tsc -v
// Run -> tsc filename
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
