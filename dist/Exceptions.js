"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullPointerException = exports.NotSupportedException = exports.NotImplementedException = exports.NoSuchElementException = exports.InvalidOperationException = exports.IllegalStateException = exports.IllegalArgumentException = exports.ClassCastException = void 0;
/**
 * An exception that occurs in case of an invalid class type cast.
 */
var ClassCastException = /** @class */ (function (_super) {
    __extends(ClassCastException, _super);
    function ClassCastException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClassCastException;
}(Error));
exports.ClassCastException = ClassCastException;
/**
 * An exception that occurs when an argument was provided, which is out of bounce.
 *
 * E.g. if a value -1 is passed into a function, which only excepts value greater 0.
 */
var IllegalArgumentException = /** @class */ (function (_super) {
    __extends(IllegalArgumentException, _super);
    function IllegalArgumentException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IllegalArgumentException;
}(Error));
exports.IllegalArgumentException = IllegalArgumentException;
/**
 * An exception that occurs when a state is or becomes inconsistent.
 *
 * E.g. if a value must not be undefined but undefined is set as value.
 */
var IllegalStateException = /** @class */ (function (_super) {
    __extends(IllegalStateException, _super);
    function IllegalStateException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IllegalStateException;
}(Error));
exports.IllegalStateException = IllegalStateException;
/**
 * An exception that occurs when a method is invalid for the current object state.
 *
 * E.g. Fetching an object from an object pool whose capacity is already exhausted.
 */
var InvalidOperationException = /** @class */ (function (_super) {
    __extends(InvalidOperationException, _super);
    function InvalidOperationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidOperationException;
}(Error));
exports.InvalidOperationException = InvalidOperationException;
/**
 * An exception that occurs when an expected result is not available.
 *
 * E.g. if a search for a specific value ends without result.
 */
var NoSuchElementException = /** @class */ (function (_super) {
    __extends(NoSuchElementException, _super);
    function NoSuchElementException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoSuchElementException;
}(Error));
exports.NoSuchElementException = NoSuchElementException;
/**
 * An exception that occurs when the implementation of a routine was not yet completed.
 */
var NotImplementedException = /** @class */ (function (_super) {
    __extends(NotImplementedException, _super);
    function NotImplementedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotImplementedException;
}(Error));
exports.NotImplementedException = NotImplementedException;
/**
 * An exception that occurs when a state is currently not valid.
 *
 * E.g. if a switch-case statement is called for a value that is currently not handled.
 */
var NotSupportedException = /** @class */ (function (_super) {
    __extends(NotSupportedException, _super);
    function NotSupportedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotSupportedException;
}(Error));
exports.NotSupportedException = NotSupportedException;
/**
 * An exception that occurs when a value is null or undefined, which was expected to be not null or undefined.
 */
var NullPointerException = /** @class */ (function (_super) {
    __extends(NullPointerException, _super);
    function NullPointerException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NullPointerException;
}(Error));
exports.NullPointerException = NullPointerException;
//# sourceMappingURL=Exceptions.js.map