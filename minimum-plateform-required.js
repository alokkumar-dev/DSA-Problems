//Enter code here
function runProgram(input) {
    input=input.split("\n");
    let size=+input[0];
    let arrival=input[1].split(" ");
    let depart=input[2].split(" ");
    
    arrival=arrival.map((e)=>+e.replace(":",""));
    arrival=arrival.sort((a,b)=>a-b);
    
     depart=depart.map((el)=>+el.replace(":",""));
    depart=depart.sort((a,b)=>a-b);
    
    
    let x=minPlatform(size,arrival,depart);
    console.log(x);
    
 }
 
 function minPlatform(n,arrival,depart){
     let platform_needed=1;
     let result=1;
     let i=1;
     let j=0;
     while(i<n && j<n){
         if(arrival[i]<=depart[j]){
             platform_needed++;
             i++;
             
             if(platform_needed>result)
             result=platform_needed;
         }
         else{
             platform_needed--;
             j++;
         }
     }
     return result;
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