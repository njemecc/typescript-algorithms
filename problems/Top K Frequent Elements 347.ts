function topKFrequent(nums: number[], k: number): number[] {
  let hashMap: { [key: string]: any } = {};

  for (let n of nums) {
    if (hashMap[n] !== undefined) {
      hashMap[n] += 1;
    } else {
      hashMap[n] = 1;
    }
  }

  const entries = Object.entries(hashMap);

  entries.sort((a, b) => a[1] - b[1]);

  return entries.map((arr) => Number(arr[0])).splice(entries.length - k, k);
}

console.log(topKFrequent([4, 1, 12, 1, 1, 2, 2, 3], 2));
