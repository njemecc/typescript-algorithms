function topKFrequent(nums, k) {
    var hashMap = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        if (hashMap[n] !== undefined) {
            hashMap[n] += 1;
        }
        else {
            hashMap[n] = 1;
        }
    }
    var entries = Object.entries(hashMap);
    entries.sort(function (a, b) { return a[1] - b[1]; });
    return entries.map(function (arr) { return Number(arr[0]); }).splice(entries.length - k, k);
}
console.log(topKFrequent([4, 1, 12, 1, 1, 2, 2, 3], 2));
