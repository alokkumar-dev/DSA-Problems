function binearySearch(arr,start,end,key){
    if(start>end){
        console.log("-1");
        return;
    }
    let mid = Math.floor((start+end)/2);
    
    if(arr[mid]==key){
        console.log(mid);
        // return mid;
    }
    else if(arr[mid]<key){
        binearySearch(arr,mid+1,end,key);
    }
    else{
        binearySearch(arr,start,mid-1,key);
    }
}
let arr = [1,2,23,4,15,6,97,8];
arr.sort();

let start = 0;
let end = arr.length;
binearySearch(arr,start,end,97);