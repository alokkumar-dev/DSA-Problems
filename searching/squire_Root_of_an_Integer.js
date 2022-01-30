
function squareRootInteger(N) {
    var start = 0;
    var end = N;
    var ans = -1;
    
    while (start <= end) {
        var mid = start + (end - start) / 2;
        var rem = mid % 1;
        mid = mid - rem;
        if (mid * mid == N) {
            return mid;
        }
        else if (mid * mid > N) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
            ans = mid;
        }
    }
    return ans;
}

var N = 4;
console.log(squareRootInteger(N));
