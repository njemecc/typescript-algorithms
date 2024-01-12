function minimumBribes(q: number[]): void {
  let bribes = 0;

  for (let i = 0; i < q.length; i++) {
    const originalPosition = q[i] - 1;

    if (originalPosition - i > 2) {
      console.log("Too chaotic");
      return;
    }

    for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }

  console.log(bribes);
}

const testCases: [number, number[]][] = [
  [5, [2, 1, 5, 3, 4]],
  [8, [1, 2, 5, 3, 7, 8, 6, 4]],
];

for (const testCase of testCases) {
  const [n, queue] = testCase;
  minimumBribes(queue);
}
