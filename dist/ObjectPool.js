"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectPool = void 0;
var core_1 = require("./core");
var Exceptions_1 = require("./Exceptions");
var ObjectPool = /** @class */ (function () {
    function ObjectPool(capacity, creator) {
        this.capacity = capacity;
        this.creator = creator;
        this.acquired = new Map();
        this.released = new Map();
        if (capacity <= 0) {
            throw new Exceptions_1.IllegalArgumentException("Error when initializing object pool. Object pool capacity must be greater than 0.");
        }
    }
    ObjectPool.prototype.acquire = function () {
        var _a;
        return ((_a = this.acquireOrNull()) !== null && _a !== void 0 ? _a : (0, core_1.error)(new Exceptions_1.InvalidOperationException("Error when acquiring object from object pool. Object pool capacity is exhausted.")));
    };
    ObjectPool.prototype.acquireOrNull = function () {
        var _this = this;
        return (0, core_1.ifNotNull)(this.fetch(), function (object) {
            return _this.checkout(object);
        });
    };
    ObjectPool.prototype.release = function (object) {
        if (!this.acquired.has(object)) {
            throw new Exceptions_1.IllegalArgumentException("Error while releasing object to object pool. Object was not acquired from that object pool.");
        }
        this.released.set(object, true);
        this.acquired.delete(object);
    };
    ObjectPool.prototype.checkout = function (object) {
        this.acquired.set(object, true);
        this.released.delete(object);
        return object;
    };
    ObjectPool.prototype.fetch = function () {
        var _a;
        return (_a = this.findFirst()) !== null && _a !== void 0 ? _a : this.create();
    };
    ObjectPool.prototype.findFirst = function () {
        var next = undefined;
        this.released.forEach(function (value, object) {
            if (next === undefined) {
                next = object;
            }
        });
        return next;
    };
    ObjectPool.prototype.create = function () {
        if (this.acquired.size < this.capacity) {
            var object = this.creator(this.acquired.size);
            this.released.set(object, true);
            return object;
        }
    };
    return ObjectPool;
}());
exports.ObjectPool = ObjectPool;
//# sourceMappingURL=ObjectPool.js.map