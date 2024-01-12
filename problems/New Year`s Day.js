function minimumBribes(q) {
    var bribes = 0;
    for (var i = 0; i < q.length; i++) {
        var originalPosition = q[i] - 1;
        if (originalPosition - i > 2) {
            console.log("Too chaotic");
            return;
        }
        for (var j = Math.max(0, originalPosition - 1); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }
    console.log(bribes);
}
var testCases = [
    [5, [2, 1, 5, 3, 4]],
    [8, [1, 2, 5, 3, 7, 8, 6, 4]],
];
for (var _i = 0, testCases_1 = testCases; _i < testCases_1.length; _i++) {
    var testCase = testCases_1[_i];
    var n = testCase[0], queue = testCase[1];
    minimumBribes(queue);
}
