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
exports.NullPointerException = exports.NotImplementedException = exports.NotSupportedException = exports.IllegalArgumentException = exports.ClassCastException = void 0;
var ClassCastException = /** @class */ (function (_super) {
    __extends(ClassCastException, _super);
    function ClassCastException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClassCastException;
}(Error));
exports.ClassCastException = ClassCastException;
var IllegalArgumentException = /** @class */ (function (_super) {
    __extends(IllegalArgumentException, _super);
    function IllegalArgumentException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IllegalArgumentException;
}(Error));
exports.IllegalArgumentException = IllegalArgumentException;
var NotSupportedException = /** @class */ (function (_super) {
    __extends(NotSupportedException, _super);
    function NotSupportedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotSupportedException;
}(Error));
exports.NotSupportedException = NotSupportedException;
var NotImplementedException = /** @class */ (function (_super) {
    __extends(NotImplementedException, _super);
    function NotImplementedException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotImplementedException;
}(Error));
exports.NotImplementedException = NotImplementedException;
var NullPointerException = /** @class */ (function (_super) {
    __extends(NullPointerException, _super);
    function NullPointerException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NullPointerException;
}(Error));
exports.NullPointerException = NullPointerException;
//# sourceMappingURL=Exceptions.js.map