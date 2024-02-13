function productExceptSelf(nums: number[]): number[] {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    const filteredNums = [...nums.slice(0, i), ...nums.slice(i + 1)];

    console.log(filteredNums);

    const result = filteredNums.reduce((acc, curr) => acc * curr, 1);

    console.log(result);

    answer.push(result);
  }

  return answer;
}

console.log(productExceptSelf([0, 0]));
