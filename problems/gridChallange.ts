function gridChallenge(grid: string[]): string {
  const sortedGrid: string[] = [];

  for (let i = 0; i < grid.length; i++) {
    const sortedArray = grid[i].split("").slice().sort().join("");
    sortedGrid.push(sortedArray);
  }

  for (let i = 0; i < sortedGrid.length - 1; i++) {
    for (let j = 0; j < sortedGrid.length; j++) {
      if (sortedGrid[i][j] > sortedGrid[i + 1][j]) {
        return "NO";
      }
    }
  }

  return "YES";
}
console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]));
