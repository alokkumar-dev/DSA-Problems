function dupliVal(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  for (let x in obj) {
    console.log(x);
  }
}

let arr = [2, 3, 2, 4, 5, 6, 2, 3, 7, 8, 9];

dupliVal(arr);
