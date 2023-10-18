// function add(num1, num2){
//  let result = num1 + num2
//  return result
//  console.log('hello world')             // function stops after return function so don't console 
// }

// console.log("Result", add(1,3))

function greeting(username="bijen"){                      // default value 
    if(!username){
        console.log("please enter your username")
        return
    }

    return `Hello my name is ${username}`
}

console.log(greeting("sumit"))                    //overwrite the default value with the given argument