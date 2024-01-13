function isBalanced(s) {
    var openings = ["(", "[", "{"];
    var closings = [")", "]", "}"];
    var arrayOfBrackets = s.split("");
    if (!openings.includes(arrayOfBrackets[0]) ||
        arrayOfBrackets.length % 2 !== 0 ||
        !closings.includes(arrayOfBrackets[arrayOfBrackets.length - 1])) {
        return "NO";
    }
    var otvoreneZagrade = [arrayOfBrackets[0]];
    for (var i = 0; i < arrayOfBrackets.length - 1; i++) {
        if (!openings.includes(arrayOfBrackets[i + 1])) {
            //zatvorena zagrada
            //proverim da li je ova zatvorena istog tipa kao i poslenja otvorena
            var indexZatvorene = closings.indexOf(arrayOfBrackets[i + 1]);
            if (indexZatvorene !==
                openings.indexOf(otvoreneZagrade[otvoreneZagrade.length - 1])) {
                return "NO";
            }
            else {
                //logika kad je dobro zatvoreno
                otvoreneZagrade.pop();
            }
        }
        else {
            //otvorena zagrada
            otvoreneZagrade.push(arrayOfBrackets[i + 1]);
        }
    }
    return "YES";
}
console.log(isBalanced("{([[ [ {{{}}]])}"));
