// implement a stopwatch object with
// start method that starts counter, doesn't allow to be called more than once in a row
// stop method that stops the counter, doesn't allow to be calle more than once in a row
// duration property that is the time delta between stop and start
// reset method that resets the counter to zero

function StopWatch() {
    let startTime = null;
    let stopTime = null;
    let tempDuration = 0;

    this.start = function () {
        if (startTime) {
            throw new Error("Stopwatch already started");
        }
        startTime = Date.now();
    };

    this.stop = function () {
        if (stopTime) {
            throw new Error("Stopwatch already stopped");
        }
        stopTime = Date.now();
        tempDuration += stopTime - startTime;
        stopTime = null;
        startTime = null;
    };

    this.reset = function () {
        tempDuration = 0;
    };
    Object.defineProperty(this, "duration", {
        get: function () {
            return tempDuration / 1000;
        },
    });
}

const sw = new StopWatch();
sw.start();

for (let index = 1; index < 10000000; index++) {
    if (index === 1000000) console.log("bing");
}

sw.stop();
console.log(`sw.duration`, sw.duration);
sw.start();

for (let index = 1; index < 10000000; index++) {
    if (index === 1000000) console.log("bing");
}

sw.stop();

console.log(`sw.duration`, sw.duration);
sw.reset();
sw.start();

for (let index = 1; index < 10000000; index++) {
    if (index === 1000000) console.log("bing");
}

sw.stop();

console.log(`sw.duration`, sw.duration);
