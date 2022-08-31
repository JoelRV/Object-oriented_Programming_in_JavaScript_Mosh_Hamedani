// object literals
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function () {
        console.log("draw");
    },
};

circle.draw();
// factory
function createCircle(radius, location) {
    return {
        radius, // alternative use radius = radius
        location,
        draw: function () {
            console.log("draw");
        },
    };
}

const circle2 = createCircle(2, {});
console.log(circle2.draw());

// constructor function
function Circle(radius, location) {
    this.radius = radius;
    this.location = location;
    this.draw = function () {
        console.log("draw");
    };
    // return this is implicit when using the new operator later
}

const circle3 = new Circle(3, {});
console.log(circle3.draw());

console.log(circle3.constructor);
console.log(circle.constructor); // we see here that object literals use the js Object() constructor

// VALUE TYPES OR PRIMITIVES IN JAVASCRIPT
// Number, String, Boolean, Symbol, undefined, null

//REFERENCE TYPES
// Object, Function, Array BUT the last types are also Objects, so ...

// when we use reference types, storing them in variables saves them by reference in memory, thus point to the same entity
// Value types are copied by Value, thus point to different entities

//Example
let x = 20;
let y = x;

x = 10;
console.log(`PRIMITIVES: X = ${x} and Y = ${y}`);

x = { value: 20 };
y = x;

x.value = 10;
console.log(`X = ${x.value} and Y = ${y.value}`); // in this case the same object is modified
