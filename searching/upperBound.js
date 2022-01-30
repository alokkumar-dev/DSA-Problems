function upperBoundLogN(arr,N,k){
    var ans =-1;
    var start =0; 
    var end = N-1;
   
   while(start<=end){
       var mid = Math.floor((start + end)/2);
       
         if(arr[mid] <= k){
              start = mid+1;
          }
          else{
              ans = mid;
              end = mid-1;
          }
   }
   return ans;
}
var arr = [0,2,4,4,5,5,7,7,9,10];
var N = arr.length;
var k = 4;
console.log(upperBoundLogN(arr,N,k));