// Numbers
// const score = 400;
// console.log(score)
// console.log(typeof score);

// const number = new Number(200)
// console.log(number)

// console.log(number.toString().length)
// console.log(number.toFixed(2))                        

// const decimalNumber = 123.423
// console.log(decimalNumber.toPrecision(5))

// const largeNumber = 100000000000  
// const string = largeNumber.toLocaleString()            //separte with comma for easy reading and convert it to string
// console.log(string)
// console.log(typeof string)

//Maths

// console.log(Math)
// console.log(Math.abs(-4))        // only convert negative value to positive
// console.log(Math.round(2.33))
// console.log(Math.ceil(4.22))
// console.log(Math.floor(4.33))
// console.log(Math.min(2,1,4,0,-3))
// console.log(Math.max(1,3,4,199))

console.log(Math.random())   // value always comes bewtween 0 and 1
console.log((Math.random() * 10) + 1)

const max = 20
const min = 10
console.log((Math.floor(Math.random() * (max-min)) +min))