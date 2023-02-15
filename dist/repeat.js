"use strict";
var repeat = function (times, block) {
    for (var index = 0; index < times; index++) {
        block(index + 1);
    }
};
repeat(5, function (index) { console.log(index); });
//# sourceMappingURL=repeat.js.map