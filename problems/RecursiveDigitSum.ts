function recursiveSuperDigit(p: string): number {
  // Base case
  if (p.length === 1) {
    return Number(p);
  }

  // Sum of digits using modulo 9 property
  const sum =
    p.split("").reduce((acc, digit) => acc + Number(digit), 0) % 9 || 9;

  // Recursive call
  return recursiveSuperDigit(String(sum));
}

function superDigit(n: string, k: number): number {
  // Calculate the super digit directly without constructing the large string
  const sum = n.split("").reduce((acc, digit) => acc + Number(digit), 0) * k;

  return recursiveSuperDigit(String(sum));
}
