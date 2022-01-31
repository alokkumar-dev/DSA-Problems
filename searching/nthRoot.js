
// You are given two integersnandmand you have to find the floor value of thenthroot ofm.

function nthRoot(n,m){
    var start = 0;
    var end  = m;
    var ans = -1;

    while(start<=end){
        var mid = start +(end - start)/2;
        var rem = mid%1;
        mid = mid-rem;
        if(mid**n == m){
            return mid;
        }
        else if(mid**n > m){
            end = mid-1;
        }
        else{
            start = mid+1;
            ans =mid;
        }
    }
    return ans;
}
var n=6;
var m = 4096;
console.log(nthRoot(n,m));