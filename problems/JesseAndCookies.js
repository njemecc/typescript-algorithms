function recursiveFunction(k, A) {
    var sortedArray = A.sort(function (a, b) { return a - b; });
    //base case
    if (sortedArray[0] >= k) {
        return 1;
    }
    //impossible
    if (sortedArray.length < 2) {
        return undefined;
    }
    var smallest = sortedArray.shift();
    var secondSmallest = sortedArray.shift();
    //formula
    var formula = smallest + 2 * secondSmallest;
    sortedArray.push(formula);
    return 1 + recursiveFunction(k, sortedArray);
}
function cookies(k, A) {
    var counter = 0;
    counter += recursiveFunction(k, A);
    if (isNaN(counter)) {
        return -1;
    }
    return counter;
}
console.log(cookies(9, [1, 62, 14]));
