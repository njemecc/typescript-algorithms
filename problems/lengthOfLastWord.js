function lengthOfLastWord(s) {
    var arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));
