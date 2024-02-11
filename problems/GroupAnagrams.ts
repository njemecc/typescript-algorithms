//My Version 111/120 (Time Limit Extended)

// function groupAnagrams(strs: string[]): string[][] {
//   const answer = [];

//   for (let i = 0; i < strs.length; i++) {
//     const trenutniArr = [strs[i]];

//     for (let j = i + 1; j < strs.length; j++) {
//       if (
//         strs[i].split("").sort().join("") === strs[j].split("").sort().join("")
//       ) {
//         trenutniArr.push(strs[j]);
//         strs.splice(j, 1);
//       }
//     }

//     answer.push(trenutniArr);
//   }

//   return answer;
// }

function groupAnagrams(strs: string[]) {
  //mapping charcount for each letter in a string
  const result = {}; //ascii values from 0 - 25 (26 characters)

  for (let str of strs) {
    const count = Array.from({ length: 26 }).fill(0);

    for (let char of str.split("")) {
      const index: number =
        Number(char.charCodeAt(0)) - Number("a".charCodeAt(0));
      //@ts-ignore
      count[index] += 1;
    }
    //@ts-ignore
    result[count] = str;
  }

  return Object.values(result);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
