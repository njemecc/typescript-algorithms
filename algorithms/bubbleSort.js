"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubble_sort(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 0; j < arr.length; ++j) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
exports.default = bubble_sort;
console.log(bubble_sort([1, 200, 42, 64, 246, 56, 42, 54, 8, 6, 0]));
