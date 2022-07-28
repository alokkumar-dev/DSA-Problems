function greaterNum(arr, n) {
  arr.sort();
  if (n < 2) {
    return "Not Possible";
  }
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] != arr[n - 1]) {
      return i;
    }
  }
  return "No next larger element";
}
let arr = [2, 3, 2, 4, 5, 6, 2, 3, 7, 8, 9];

let n = arr.length - 1;
console.log(greaterNum(arr, n));
