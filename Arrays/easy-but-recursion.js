function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let line=1;
    for(i=0;i<tc;i++){
        let size=+input[line++];
        let arr=input[line++].split(" ").map(Number);
        console.log(easySumRec(arr,size));
    }
 }
 function easySumRec(arr,size){
    if(size<=0){
        return 0;
    }
    else{
        return (easySumRec(arr,size-1)+arr[size-1]);
    }
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