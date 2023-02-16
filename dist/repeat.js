"use strict";
// interface IRepeat {
//   repeat(times: number, block: (index: number) => void): void;
//   repeat(from: number, to: number, block: (index: number) => void): void;
// }
// class Repeat implements IRepeat{
//     repeat(times: number, block: (index: number) => void): void;
//     repeat(from: number, to: number, block: (index: number) => void): void;
//     repeat(from: unknown, to: unknown, block?: unknown): void {
//         throw new Error("Method not implemented.");
//     }
// }
var repeat = function (times, block) {
    for (var index = 0; index < times; index++) {
        block(index + 1);
    }
};
var repeatUpTo = function (from, to, block) {
    for (var index = from; index < to + 1; index++) {
        block(index);
    }
};
var repeatDownTo = function (from, to, block) {
    var index = from;
    while (index >= to) {
        block(index);
        index--;
    }
};
var println = function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
};
var newLine = function () {
    println("");
};
var TODO = function (message) {
    if (message === void 0) { message = "Not implemented exception"; }
    throw new Error(message);
};
var measureTimeMillis = function (block) {
    var startTime = new Date();
    block();
    var endTime = new Date();
    return endTime.getTime() - startTime.getTime();
};
repeat(5, function (index) {
    println(index);
});
newLine();
repeatUpTo(5, 8, function (index) {
    println(index);
});
newLine();
repeatDownTo(8, 5, function (index) {
    println(index);
});
//# sourceMappingURL=repeat.js.map