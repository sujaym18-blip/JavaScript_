let arr = [70, 20, 30, 40, 50, 60, 70, 10, 90];

let largest = 0;

let Second = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        Second = largest;
        largest = arr[i]
    }else if(arr[i]>Second && arr[i]<largest){
        Second = arr[i]
    }
}

console.log(Second, largest)