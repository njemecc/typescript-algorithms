function gridChallenge(grid) {
    var sortedGrid = [];
    for (var i = 0; i < grid.length; i++) {
        var sortedArray = grid[i].split("").slice().sort().join("");
        sortedGrid.push(sortedArray);
    }
    for (var i = 0; i < sortedGrid.length - 1; i++) {
        for (var j = 0; j < sortedGrid.length; j++) {
            if (sortedGrid[i][j] > sortedGrid[i + 1][j]) {
                return "NO";
            }
        }
    }
    return "YES";
}
console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]));
