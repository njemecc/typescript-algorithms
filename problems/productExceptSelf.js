var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function productExceptSelf(nums) {
    var answer = [];
    for (var i = 0; i < nums.length; i++) {
        var filteredNums = __spreadArray(__spreadArray([], nums.slice(0, i), true), nums.slice(i + 1), true);
        console.log(filteredNums);
        var result = filteredNums.reduce(function (acc, curr) { return acc * curr; }, 1);
        console.log(result);
        answer.push(result);
    }
    return answer;
}
console.log(productExceptSelf([0, 0]));
