//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line =1;
    for(let i=0; i<tc; i++){
        let n = +input[line++];
        let arr = input[line++].split(" ").map(Number);
       console.log(longestSubArr(n,arr));
    }
 }
 function longestSubArr(n,arr){
     let longest = 1;
     let length = 1;
     for (let i=1; i<n; i++){
     
         if (arr[i] > arr[i-1]){
             length++;
         }
         else{
             if (longest < length){
                 longest = length;
             }
             length = 1;  
         }  
     }
    
     if (longest < length){
         longest = length;
     }
     return longest;
 
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