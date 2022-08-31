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
        radius, // alternative use radius : this.radius
        location,
        draw: function () {
            console.log("draw");
        },
    };
}

const circle2 = createCircle(2, {});
console.log(circle2.draw());
