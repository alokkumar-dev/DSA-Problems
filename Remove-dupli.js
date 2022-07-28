function dupli(arr){
    let ans ={};
    for(let i=0; i<arr.length; i++){
        if(ans[arr[i]]==undefined){
            ans[arr[i]]=1;
        }else{
            ans[arr[i]]++;
        }
    }
    let res = [];
    for( x in ans){
        res.push(x);
    }
    console.log(res.join(" "));
}

let arr = [1,2,4,5,4,3,2,5,6,7,8,9];
dupli(arr);