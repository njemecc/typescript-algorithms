function recursiveSuperDigit(p) {
    // Base case
    if (p.length === 1) {
        return Number(p);
    }
    // Sum of digits using modulo 9 property
    var sum = p.split("").reduce(function (acc, digit) { return acc + Number(digit); }, 0) % 9 || 9;
    // Recursive call
    return recursiveSuperDigit(String(sum));
}
function superDigit(n, k) {
    // Calculate the super digit directly without constructing the large string
    var sum = n.split("").reduce(function (acc, digit) { return acc + Number(digit); }, 0) * k;
    return recursiveSuperDigit(String(sum));
}
