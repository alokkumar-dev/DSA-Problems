
// Write code here 

var arr = [2, 3, 1, 7, 5, 6, 8, 4];
var n = arr.length;
var low = 0;
var high = n - 1;
if (low == high) {
    console.log(arr[low])
} else {
    mergeSort(arr, low, high)
}
function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }
    var mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, high, mid);
    //  console.log(arr) 
}

function merge(arr, low, high, mid) {
    //CREATE TWO ARRAYS FOR COMPARISON.. 
    var left = [];
    var right = [];
    for (let a = low; a <= mid; a++) {
        left.push(arr[a]);
    }
    for (let b = mid + 1; b <= high; b++) {
        right.push(arr[b]);
    }
    // IMPLEMENT TWO POINTERS FOR SORTING BETWEEN ELEMENT OF ARRAYS.. 

    var i = 0;
    var j = 0;
    var k = low;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
    if (high == arr.length - 1 && low == 0) {
        var ans = ''
        for (var i = 0; i < arr.length; i++) {
            ans += arr[i] + " "
        }
        console.log(ans)
    }
}

