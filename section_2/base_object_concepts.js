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

// Removing and adding properties
const circle4 = new Circle(4);

circle4.location = { x: 1 }; // dot notation
circle4["location"] = { x: 1 }; // bracket notation

//advantages of bracket notation: allow for dynamic access and invalid property names in dot noation
//example
const propertyName = "center-location";
circle4[propertyName] = 0;
console.log(circle4);

//delete property
delete circle4[propertyName];
console.log(circle4);

// Enumerating Properties
for (let key in circle4) {
    console.log(key);
}
//or
console.log(Object.keys(circle4)); // returns array

if ("radius" in circle4) {
    console.log("Circle has a radius.");
} // check for existance of a property

// exemples of abstraction
function CircleAbstract(radius, location) {
    // one way to hide implementation details if to use
    // scope variables that will cease to exist outside of
    // the function call
    let defaultLocation = { x: 1, y: 2 };
    let computeOptimumLocation = function (token) {
        // stuff
    };

    // we can then define a method that returns the value
    // of our variable, without it being accesible from the user instance
    // this.getDefaultLocation = function () {
    //     return defaultLocation;
    // };

    // a cleaner way is to set a readonly property usinf Object.defineProperty
    // this allos to set a get method and the property can be accessed using
    // circle.defaultLocation
    // on top of that you can also define a set method
    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error("Invalid location.");
            }
            defaultLocation = value;
        },
    });

    this.radius = radius;
    this.location = location;
    this.draw = function () {
        // given closure we can use the declared vars
        // and compute something that won't be accessible
        // in the object instance
        computeOptimumLocation(0.1);

        console.log("draw");
    };
    // return this is implicit when using the new operator later
}

const circleAbs = new CircleAbstract(1, {});
//circleAbs.defaultLocation = 1; // thows error
circleAbs.defaultLocation = { x: 1, y: 2 };
console.log(circleAbs.defaultLocation); // will throw error of undefined property
