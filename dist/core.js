"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triple = exports.TODO = exports.repeatUpTo = exports.repeatDownTo = exports.repeat = exports.pair = exports.error = exports.println = exports.newLine = exports.measureTimeMillis = exports.lazy = exports.checkNotNull = void 0;
var Exceptions_1 = require("./Exceptions");
var Lazy_1 = require("./Lazy");
var Pair_1 = require("./Pair");
var Triple_1 = require("./Triple");
var checkNotNull = function (value, message) {
    if (message === void 0) { message = "Parameter 'value' must be not null and not undefined"; }
    return value !== null && value !== void 0 ? value : error(new Exceptions_1.IllegalArgumentException(message));
};
exports.checkNotNull = checkNotNull;
var lazy = function (initializer) {
    return new Lazy_1.Lazy(initializer);
};
exports.lazy = lazy;
var measureTimeMillis = function (block) {
    var startTime = new Date();
    block();
    var endTime = new Date();
    return endTime.getTime() - startTime.getTime();
};
exports.measureTimeMillis = measureTimeMillis;
var newLine = function () {
    (0, exports.println)("");
};
exports.newLine = newLine;
var println = function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
};
exports.println = println;
function error(first) {
    if (first === undefined) {
        return error();
    }
    if (typeof first === "string") {
        return error(first);
    }
    throw first;
}
exports.error = error;
var pair = function (first, second) {
    return new Pair_1.Pair(first, second);
};
exports.pair = pair;
var repeat = function (times, block) {
    if (times < 0) {
        error("Error while calling 'repeat'. Parameter 'times' must be greater or equal '0'.");
    }
    for (var index = 0; index < times; index++) {
        block(index + 1);
    }
};
exports.repeat = repeat;
var repeatDownTo = function (from, to, block) {
    if (from < to) {
        error("Error while calling 'repeatDownTo'. Parameter 'from' must be greater or equal to parameter 'to'.");
    }
    var index = from;
    while (index >= to) {
        block(index);
        index--;
    }
};
exports.repeatDownTo = repeatDownTo;
var repeatUpTo = function (from, to, block) {
    if (from > to) {
        error("Error while calling 'repeatUpTo'. Parameter 'from' must be smaller or equal to parameter 'to'.");
    }
    for (var index = from; index < to + 1; index++) {
        block(index);
    }
};
exports.repeatUpTo = repeatUpTo;
var TODO = function (message) {
    if (message === void 0) { message = "Not implemented exception"; }
    return error(new Exceptions_1.NotImplementedException(message));
};
exports.TODO = TODO;
var triple = function (first, second, third) {
    return new Triple_1.Triple(first, second, third);
};
exports.triple = triple;
//# sourceMappingURL=core.js.map