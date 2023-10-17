const data = new String('summit')

// console.log(data[0])
// console.log(data.length)
// console.log(data.__proto__)
// console.log(data.toUpperCase())
// console.log(data.charAt(2))
// console.log(data.indexOf('m'))
 
const newString = data.substring(0,4)  // doesnot include last index  , doesnot obey (-index) always start from zero index
console.log(newString)

const anotherString = data.slice(2)
console.log(anotherString, 'another string')

const string2 = " sumit    "
console.log(string2)

console.log(string2.trim())   //remove end and start spaces but not for line break


console.log(string2.replace('u', 'g'))