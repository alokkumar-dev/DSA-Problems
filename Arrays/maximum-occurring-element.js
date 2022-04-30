function maximumOccuringElement(A, N) {
  //write code here
  let ans = {};
  for (let i = 0; i < N; i++) {
    if (ans[A[i]] == undefined) {
      ans[A[i]] = 1;
    } else {
      ans[A[i]]++;
    }
  }
  var max = -1;
  let res = -1;
  for (let x in ans) {
    if (ans[x] > max) {
      max = ans[x];
      res = x;
    }
  }
  console.log(res);
}
