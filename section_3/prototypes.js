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

// Property descriptors
let person = { name: "Mosh" };

console.log(Object.keys(person)); // only name is shown, other props, like proporties do not show up

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

console.log(descriptor);
// we here see the concept of descriptor metadata. It contains key:value pairs that define
// if the method/property is writable (can be overwritten), enumerable (Object.Keys) or configurable ie can be deleted. Value shows the implemented version of the method here.

Object.defineProperty(person, "name", {
    writable: false,
    enumerable: true,
    configurable: false,
});

// here we manually set the descriptor

person.name = "JJ";
console.log(person.name);
delete person.name;
console.log(person.name);
// As we can see setting writable and configurable to false doesn't allow us to change or delete the name property

// lets look how constructor prototypes work
function Circle(radius) {
    // instance members
    this.radius = radius;

    this.move = function () {
        this.draw();
        console.log("move");
    };
}
// here the Circle constructor will have a prototype property that points to the
// prototype each instance will have.
const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(Object.getPrototypeOf(c1) === Object.getPrototypeOf(c2)); // true

//currently the draw method is an instance method, thus in memory each Circle instance will
// have it's own copy

// A more efficient wayto implement it is to define draw in the constructor prototype,
//given the fact that this method does not change and each instance can't directly look it up
// in their prototype

//Prototype members
Circle.prototype.draw = function () {
    console.log("draw");
};

console.log(`Object.getPrototypeOf(c1)`, Object.getPrototypeOf(c1));

// prototype members are scoped with instance members. This means that they can call on each other. for example
console.log(c1.move()); // calls draw from the constructor prototype

//iterating of instance vs prototypes members

console.log(`Object.keys(c1)`, Object.keys(c1)); // only instances
for (let key in c1) console.log(key); // returns instance + prototype
// in javascript instance properties are often referenced as "Own", which explains
console.log(c1.hasOwnProperty("move")); // true
console.log(c1.hasOwnProperty("draw")); // false
