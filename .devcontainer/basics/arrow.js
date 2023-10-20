// const object = {
//     name : "sumit", 
//     location: "pokhara", 
//     details: function(){
//         console.log(this)
//         return `Hello everyone I am ${this.name} and I live in ${this.location}`
//     }
// }

// console.log(object.details())
// console.log("this:", this)

// arrow function

// const object = () =>{
//     const username = "sumit"
//     console.log(this.username)
// }

const addTwo = (num1, num2) => (num1 + num2)      // implicit arrow function no need to write return.. if curly braces is used return must be written
console.log(addTwo(3,4))

// object return 
const object = () => ({username:"sumit"})
console.log(object())
