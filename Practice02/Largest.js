let arr = [10,20,50,40,5]


let largest = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
}

console.log(largest)