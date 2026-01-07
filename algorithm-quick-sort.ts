/**
 * Algorithm Quick Sort
 * --------------------
 * Quick sort is a highly efficient sorting algorithm that uses a divide-and-conquer strategy.
 */
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [3, 6, 8, 10, 1, 2, 1];
const sorted = quickSort(array);
console.log(sorted);