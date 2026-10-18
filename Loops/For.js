// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num)
// }

// const greeting = "Hello World!"

// for(const greet of greeting){
//     console.log(`Each char is ${greet}`)
// }

// const map = new Map()

// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATES OF AMERICA")
// map.set('FR',"FRANCE")


// // console.log(map)

// for(const [key, value] of map){
//     console.log(key ,':-', value)
// }


const myObject = {
    js: 'javascript',
    cpp: 'cpp',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   
    console.log(myObject[key])
    
}