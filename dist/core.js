"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triple = exports.TODO = exports.repeatUpTo = exports.repeatDownTo = exports.repeat = exports.pair = exports.println = exports.newLine = exports.measureTimeMillis = exports.lazy = exports.ifNull = exports.ifNotNull = exports.error = exports.checkNotNull = void 0;
var Exceptions_1 = require("./Exceptions");
var Lazy_1 = require("./Lazy");
var Pair_1 = require("./Pair");
var Triple_1 = require("./Triple");
/**
 * Checks and returns the provided parameter {@link value} and expects it to be not null and to be not undefined.
 *
 * If the {@link value} is null or undefined an {@link IllegalStateException} is thrown.
 * To provide an alternative text to the exception, parameter {@link message} can be passed in.
 */
var checkNotNull = function (value, message) {
    if (message === void 0) { message = "Parameter 'value' must be not null and not undefined"; }
    return value !== null && value !== void 0 ? value : error(new Exceptions_1.IllegalStateException(message));
};
exports.checkNotNull = checkNotNull;
function error(first) {
    if (first === undefined) {
        throw new Error();
    }
    if (typeof first === "string") {
        throw new Error(first);
    }
    throw first;
}
exports.error = error;
/**
 * Calls the function {@link block} if the given {@link value} is not null and not undefined.
 *
 * The function {@link block} may return a value or undefined.
 */
var ifNotNull = function (value, block) {
    if (value !== null && value !== undefined) {
        return block();
    }
};
exports.ifNotNull = ifNotNull;
/**
 * Calls the function {@link block} if the given {@link value} is null or undefined.
 *
 * The function {@link block} may return a value or undefined.
 */
var ifNull = function (value, block) {
    if (value === null || value === undefined) {
        return block();
    }
};
exports.ifNull = ifNull;
/**
 * Provides an instance of type {@link ILazy}, to lazy load a value of type {@link T}, which is useful especially for loading memory and CPU intensive values only on demand.
 *
 * The value is provided via function {@link initializer}.
 */
var lazy = function (initializer) {
    return new Lazy_1.Lazy(initializer);
};
exports.lazy = lazy;
/**
 * Executes the function {@link block} and returns the measured execution time in millis.
 */
var measureTimeMillis = function (block) {
    var startTime = new Date();
    block();
    var endTime = new Date();
    return endTime.getTime() - startTime.getTime();
};
exports.measureTimeMillis = measureTimeMillis;
/**
 * Creates a new line at the console.
 */
var newLine = function () {
    (0, exports.println)("");
};
exports.newLine = newLine;
/**
 * Prints the given {@link data} at the console.
 */
var println = function () {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
};
exports.println = println;
/**
 * Creates and returns an instance of {@link Pair}, which keeps the two readonly values {@link first} and {@link second}.
 */
var pair = function (first, second) {
    return new Pair_1.Pair(first, second);
};
exports.pair = pair;
/**
 * Repeats the execution of function {@link block} for the given number {@link times}.
 * For each call of function {@link block} the current index is passed into.
 */
var repeat = function (times, block) {
    if (times < 0) {
        throw new Exceptions_1.IllegalArgumentException("Error while calling 'repeat'. Parameter 'times' must be greater or equal '0'.");
    }
    for (var index = 0; index < times; index++) {
        block(index + 1);
    }
};
exports.repeat = repeat;
/**
 * Repeats the execution of function {@link block} from number {@link from} down to number {@link to}.
 * For each call of function {@link block} the current index is passed into.
 *
 * If {@link from} is smaller than {@link to} an {@link IllegalArgumentException} is thrown.
 */
var repeatDownTo = function (from, to, block) {
    if (from < to) {
        throw new Exceptions_1.IllegalArgumentException("Error while calling 'repeatDownTo'. Parameter 'from' must be greater or equal to parameter 'to'.");
    }
    var index = from;
    while (index >= to) {
        block(index);
        index--;
    }
};
exports.repeatDownTo = repeatDownTo;
/**
 * Repeats the execution of function {@link block} from number {@link from} up to number {@link to}.
 * For each call of function {@link block} the current index is passed into.
 *
 * If {@link from} is greater than {@link to} an {@link IllegalArgumentException} is thrown.
 */
var repeatUpTo = function (from, to, block) {
    if (from > to) {
        throw new Exceptions_1.IllegalArgumentException("Error while calling 'repeatUpTo'. Parameter 'from' must be smaller or equal to parameter 'to'.");
    }
    for (var index = from; index < to + 1; index++) {
        block(index);
    }
};
exports.repeatUpTo = repeatUpTo;
/**
 * Throws an {@link NotImplementedException}. With parameter {@link message} a text can be passed in.
 */
var TODO = function (message) {
    if (message === void 0) { message = "Not implemented exception"; }
    throw new Exceptions_1.NotImplementedException(message);
};
exports.TODO = TODO;
/**
 * Creates and returns an instance of {@link Triple}, which keeps the three readonly values {@link first}, {@link second} and {@link third}.
 */
var triple = function (first, second, third) {
    return new Triple_1.Triple(first, second, third);
};
exports.triple = triple;
//# sourceMappingURL=core.js.map