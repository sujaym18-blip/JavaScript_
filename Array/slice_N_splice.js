// const myArray = [1,2,3,4,5,6]

// console.log("Original array :-", myArray)

// const myn1 = myArray.slice(0,3)

// console.log("Slice :-", myn1)

// console.log("Original array after slice :-", myArray)

// const myN2 = myArray.splice(0,3,...["sujay"])
// console.log("Splice :-", myN2)

// console.log("Original array after splice :-", myArray)


let OriArr = [1,2,3,4,5,6,7,8]

console.log("Original array:", OriArr)

let SliceArr = OriArr.slice(0,3)


console.log("Sliced array :", SliceArr)
console.log(" Original Array after slice:", OriArr)


let SpliceArr = OriArr.splice(5,3,50,60,...["sujay"])

console.log("Spliced array :", SpliceArr)
console.log(" Original Array after splice:", OriArr)

