/**
 * Algorithm Binary Search
 * -----------------------
 * Binary search is an efficient algorithm for finding an element in an ordered list of elements.
 */
function binarySearch(a: number[], l: number, r: number, x: number): number {
  if (l > r) return -1;

  const m = Math.floor((l + r) / 2);

  if (a[m] === x) {
    console.table(["entra", m]);
    return m;
  }

  if (a[m] < x) {
    return binarySearch(a, m + 1, r, x);
  } else {
    return binarySearch(a, l, m - 1, x);
  }
}

const arreglo = Array.from(Array(1000000).keys());
const position = binarySearch(arreglo, 0, arreglo.length - 1, 645876);
console.log(position);
