function recordBreakerValue(arr,N){
    var a = arr[0];
    var b = arr[0];
    var c =0;
    var d =0;
    for(var i=1; i<N; i++){
        if(arr[i]<a){
            d++;
            a = arr[i];
        }
        else if(arr[i]>b){
            c++;
            b = arr[i];
        }
    }
    console.log(c,d);
 }
 var arr =[10, 5, 20, 20, 4, 5, 2, 25, 1];
 var N = arr.length;
 recordBreakerValue(arr,N);
