// in javascript OOP works by prototypical inheritance. In Javascript everything is an object
// thus all entities inherits at least a base prototype that we will call "ObjectBase" hence forth
// example

let x = {};
let y = {};

console.log(
    `Object.getPrototypeOf(x) === Object.getPrototypeOf(y)`,
    Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
);
// We see here that both empty object instances have inherited the same base prototype
console.log(
    `Object.getPrototypeOf(Object.getPrototypeOf(x))`,
    Object.getPrototypeOf(Object.getPrototypeOf(x))
); // null
// We also see that this base prototype as no prototype itself, hence the notion of "ObjectBase"

// in the case of an array we can see at least three levels of inheritance. arr < Array prototype < Object prototype
let arr = [];
console.log(`Object.getPrototypeOf(arr);`, Object.getPrototypeOf(arr));
console.log(
    `Object.getPrototypeOf(Object.getPrototypeOf(arr))`,
    Object.getPrototypeOf(Object.getPrototypeOf(arr))
);
console.log(
    `Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))`,
    Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))
);
