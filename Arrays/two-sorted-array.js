//Enter code here
function runProgram(input) {
  input = input.split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line++];
    var arr1 = input[line++].split(" ").map(Number);
    var arr2 = input[line++].split(" ").map(Number);
    TwoSortArrays(arr1, arr2, n);
  }
}
function TwoSortArrays(arr1, arr2, n) {
  var left = 0;
  var right = n - 1;
  var count = 0;
  var last = arr1.length;

  while (left < last) {
    if (arr1[left] == arr2[right]) {
      count++;
      left++;
      right--;
    } else if (arr1[left] > arr2[right]) {
      right--;
    } else {
      left++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
