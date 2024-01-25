"use strict";
//ceo quick_sort algoritam delimo u dve funkcije
//partition - gde trazimo pivot - vraca pivot index (koliko sam skapirao tamo gde bi trebalo da se nalazi njegovo mesto)
// qs
Object.defineProperty(exports, "__esModule", { value: true });
function qs(arr, lo, hi) {
    //base case
    if (lo >= hi) {
        return;
    }
    var pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var idx = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            var tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
function quick_sort(arr) {
    qs(arr, 0, arr.length - 1);
}
exports.default = quick_sort;
