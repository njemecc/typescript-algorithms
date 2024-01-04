// is the dataset sorted
//big O is O(log N)

export default function binarySearch(
  haystack: number[],
  needle: number
): boolean {
  let low = 0;
  let high = haystack.length;

  do {
    let mid = Math.floor(low + (high - low) / 2);
    let v = haystack[mid];

    if (needle === v) {
      return true;
    } else if (needle > v) {
      low = mid + 1;
    } else if (needle < v) {
      high = mid;
    }
  } while (low < high);

  return false;
}
