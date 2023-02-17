"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lazy = void 0;
var Lazy = /** @class */ (function () {
    function Lazy(initializer) {
        this.initializer = initializer;
        this._isInitialized = false;
        this._value = undefined;
    }
    Object.defineProperty(Lazy.prototype, "value", {
        get: function () {
            if (!this._value) {
                this._value = this.initializer();
                this._isInitialized = true;
            }
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lazy.prototype, "isInitialized", {
        get: function () {
            return this._isInitialized;
        },
        enumerable: false,
        configurable: true
    });
    return Lazy;
}());
exports.Lazy = Lazy;
//# sourceMappingURL=Lazy.js.map