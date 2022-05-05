//Enter code here
function runProgram(input) {
    input = input.split("\n");
    let tc= +input[0];
    let line = 1;
    for(let i=0; i<tc; i++){
        let [n,k]= input[line++].split(" ").map(Number);
        let arr= input[line++].split(" ").map(Number);
        let ans =[];
        let subSet = "";
        evenSubSet(0,ans,subSet, arr);
        
        let count =0;
        for(let j = 0; j<ans.length; j++){
            let x = ans[j].split(" ").map(Number);
            x.pop();
            let evenCount=0;
            for(let k=0; k<x.length; k++){
                if(x[k]%2==0){
                    evenCount++
                }
            }
            if(evenCount>=k){
                count++;
            }
        }
            console.log(count);
    }
 }
 function evenSubSet(i,ans,subSet, arr){
     if(i==arr.length){
         ans.push(subSet);
         return;
     }
     evenSubSet(i+1,ans,subSet+arr[i]+" ", arr);
     evenSubSet(i+1,ans,subSet, arr);
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