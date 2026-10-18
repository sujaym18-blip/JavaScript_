let arr = ["apple", "banana", "apple", "orange", "banana"];


let freq = {}

for(let element of arr){
    if(freq[element]){
        freq[element]++;    
    } else {
        freq[element] = 1;
    }
}

console.log(freq)