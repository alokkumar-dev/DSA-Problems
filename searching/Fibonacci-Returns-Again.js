//Enter code here
function runProgram(input) {
    let n = +input;
    console.log(fib(n));
 }
 function fib(n){
     let arr = [];
      arr[0]=0;
      arr[1]=1;
      for(let i=2; i<=n; i++){
          arr[i]= arr[i-1]+arr[i-2];
      }
      return arr[n];
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