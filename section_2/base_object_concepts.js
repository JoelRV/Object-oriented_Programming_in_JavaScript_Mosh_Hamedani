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
