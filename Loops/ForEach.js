const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item){
   // console.log(item)
})


// coding.forEach((value) => {
//     console.log(value)
// })

function PrintMe(item){
    console.log(item)
}
//coding.forEach(PrintMe)

const myCoding = [

    {
        languageName: "JavaScript",
        languageFileName: "js"

    },
    {
        languageName: "Java",
        languageFileName: "java"

    },
    {
        languageName: "python",
        languageFileName: "py"

    }
]

myCoding.forEach((item) => {
    console.log(item.languageName,":-", item.languageFileName)
})