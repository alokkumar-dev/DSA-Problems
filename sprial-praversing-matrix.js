function spirallyTraversingAMatrix(N, matrix) {
  let arr = matrix;
  let count = 0;
  let matSize = N * N;
  let top = 0;
  let right = N - 1;
  let bottom = N - 1;
  let left = 0;

  let ans = [];
  while (count < matSize) {
    for (i = top; i <= bottom && count < matSize; i++) {
      ans.push(arr[left][i]);
      count++;
    }
    left++;
    for (i = left; i <= right && count < matSize; i++) {
      ans.push(arr[i][bottom]);
      count++;
    }
    bottom--;
    for (i = bottom; i >= top && count < matSize; i--) {
      ans.push(arr[right][i]);
      count++;
    }
    right--;
    for (i = right; i >= left && count < matSize; i--) {
      ans.push(arr[i][top]);
      count++;
    }
    top++;
  }
  console.log(ans.join(" "));
}
