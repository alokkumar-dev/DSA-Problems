function runProgram(input) {
	let arr = input.split(" ").map(Number);
	subArrUndCond(arr);
}
function subArrUndCond(arr){
  for(let i = 0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length+1;j++){
            let temp = arr.slice(i,j);
            if(temp.reduce(subArr)==0){
                console.log(i, j - 1);
                
            }
        }
    }
}
function subArr(ac,el){
    return ac+el;
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