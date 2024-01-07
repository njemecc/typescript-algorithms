export default function bubble_sort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

console.log(bubble_sort([1, 200, 42, 64, 246, 56, 42, 54, 8, 6, 0]));
