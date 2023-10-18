const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())

// let createdDate = new Date(2024, 0, 14)         // for single digit month january is start from zero 
// console.log(createdDate.toLocaleString())
// // console.log(createdDate.toDateString())

// let newDate = new Date("2023-01-15")             // for double digit month january is start from 01
// console.log(newDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(Math.floor(myTimeStamp/1000))           // in seconds divide by thousand

let getDate = new Date()
console.log(getDate)
console.log(getDate.getDay())
console.log(getDate.getMonth() + 1)