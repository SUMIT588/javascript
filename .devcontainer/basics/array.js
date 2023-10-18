// Array 
const arr1 = [ 2, 3, 'hello world ' ]
// console.log(typeof arr1[1])

const newArray = new Array(2,1,3,'sumit')
// console.log(newArray)

//Array Methods
// arr1.push(4)
// arr1.push(5)               // push the insert data in last index
// console.log(arr1) 
// newArray.pop()            // remove last index in array
// console.log(newArray)

// arr1.unshift(9)            // insert the value at the starting index of array . . never use this
// console.log(arr1)       
// arr1.shift()               // remove the starting index of array
// console.log(arr1)

// const arr2 = [2,4,2,2323,211]
// console.log(arr2.includes('sumit'))       // gives boolean value , true or false
// console.log(arr2.indexOf(23))               // if not gives -1


// const string = arr2.join()
// console.log(string)                 // convert all value into string
// console.log(typeof string)

// slice and splice

const array1 = [1,2,3,4,5,6,7]
console.log("A", array1.slice(1,3))       // doesnot change the original value
console.log(array1)

console.log("B", array1.splice(1,3))       // change the original array
console.log(array1, 'original')
