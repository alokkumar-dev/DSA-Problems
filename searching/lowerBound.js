function lowerBoundLogN(arr, N, k) {
    var ans = -1;
    var start = 0;
    var end = N - 1;
    while (start <= end) {
        var mid = Math.floor((start + (end - start) / 2));
        if (arr[mid] == k) {
            ans = mid;
            end = mid - 1;
        }

        else if (arr[mid] > k) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    console.log(ans);
}
var arr = [1,1,2,2,5,4,4,];
arr.sort();
var N = arr.length;
var k = 4;
lowerBoundLogN(arr,N,k)
