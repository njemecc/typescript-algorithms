function recursiveFunction(k: number, A: number[]): number | undefined {
  const sortedArray = A.sort((a, b) => a - b);

  //base case
  if (sortedArray[0] >= k) {
    return 1;
  }

  //impossible
  if (sortedArray.length < 2) {
    return undefined;
  }

  const smallest = sortedArray.shift();
  const secondSmallest = sortedArray.shift();

  //formula
  const formula = smallest! + 2 * secondSmallest!;
  sortedArray.push(formula);

  return 1 + recursiveFunction(k, sortedArray)!;
}

function cookies(k: number, A: number[]): number {
  let counter = 0;

  counter += recursiveFunction(k, A)!;

  if (isNaN(counter)) {
    return -1;
  }

  return counter;
}

console.log(cookies(9, [1, 62, 14]));
