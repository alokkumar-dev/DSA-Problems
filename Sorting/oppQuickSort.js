
let arr = [2, 3, 1, 4, 5,7,12,3,2,1];
console.log(oppQuickSort(arr).join(" "));


function oppQuickSort(arr){
    if(arr.length <=1){
        return arr;
    }
    let pivot = Math.floor(Math.random()*arr.length);
    let left_arr = [];
    let right_arr = [];
    
    for(let i=0; i<arr.length; i++){
        if(i==pivot){
            continue;
        }
        else if(arr[i]< arr[pivot]){
            left_arr.push(arr[i]);
        }
        else{
            right_arr.push(arr[i]);
        }
    }
    return [...oppQuickSort(right_arr), arr[pivot], ...oppQuickSort(left_arr)];
}
