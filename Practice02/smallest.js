let arr = [10,20,50,40,5]


let smallest = 10;

for(let i=0; i<arr.length; i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}

console.log(smallest)