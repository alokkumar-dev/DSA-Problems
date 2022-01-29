
// Write code here 

var N = 7;
var arr = [3, 2, 6, 1, 7, 5, 4];
var low = 0;
var high = N - 1;
if (low == high) {
    console.log(arr[0]);
} else {
    quickSort(arr, low, high);
}


var front = 0;
function quickSort(arr, low, high) {
    if (low >= high) {
        let ans = '';
        front++;
        if (front == arr.length - 1) {
            for (let i = 0; i < arr.length; i++) {
                ans += arr[i] + ' ';
            }
            console.log(ans);
        }
        return;
    }
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
}

function partition(arr, low, high) {
    pivot = low;
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= arr[pivot] && i < high) {
            i++;
        }
        while (arr[j] > arr[pivot] && j > low) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[pivot], arr[j]] = [arr[j], arr[pivot]];
    return j;

} 
