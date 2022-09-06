// implement a stopwatch object with
// start method that starts counter, doesn't allow to be called more than once in a row
// stop method that stops the counter, doesn't allow to be call more than once in a row
// duration property that is the time delta between stop and start
// reset method that resets the counter to zero

// This time use instance vs prototype methods

function StopWatch() {
    _startTime = null;
    _stopTime = null;
    _tempDuration = 0;

    this.reset = Object.defineProperty(this, "duration", {
        get: function () {
            return this._tempDuration / 1000;
        },
    });

    this.reset = Object.defineProperty(this, "_stopTime", {
        get: function () {
            return _stopTime;
        },
    });

    this.reset = Object.defineProperty(this, "_startTime", {
        get: function () {
            return _startTime;
        },
    });
}

StopWatch.prototype.start = function () {
    if (this._startTime) {
        throw new Error("Stopwatch already started");
    }
    this._startTime = Date.now();
};

StopWatch.prototype.stop = function () {
    if (this._stopTime) {
        throw new Error("Stopwatch already stopped");
    }
    this._stopTime = Date.now();
    this._tempDuration += this._stopTime - this._startTime;
    this._stopTime = null;
    this._startTime = null;
};

StopWatch.prototype.reset = function () {
    this._tempDuration = 0;
};

const sw = new StopWatch();

for (let key in sw) console.log(key);
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
