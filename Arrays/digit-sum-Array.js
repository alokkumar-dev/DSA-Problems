//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let n = +input[line++];
        let arr = input[line++].split(" ");
        digitSumArr(n,arr);
    }
 }
 function digitSumArr(n,arr){
     let ansSum = [];
     for(let i=0; i<n; i++){
         let sum = 0;
         let numbers = arr[i].split("").map(Number);
         for(let j=0; j<numbers.length; j++){
             sum += numbers[j];
         }
             ansSum.push(sum);
     }
         console.log(ansSum.join(" "));
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