// lexical scoping

function outer(){
    let name = "sujay"


    function inner(){
      console.log(name)
    }

    inner()
}
outer()

