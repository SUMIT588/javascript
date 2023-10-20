const value = ""

if(value){
    console.log("value is true")
} else {
    console.log("value is false")
}

// falsy value : false, 0, -0, BigInt 0n , undefined, null, "", NaN 

// truthy value : true, "0", " ", "false", [], {}, function(){}, 

const array = []

if(array.length === 0){
    console.log("Array is empy")
}

const object = {}

if(Object.keys(object).length === 0){
    console.log("object is empty")
}

// nullish coalescing operator (??) : null undefined

let var1;
var1 = undefined ?? 10
console.log(var1)

// terniary operator  : condition ? true : false
const budget = 1000
budget >= 900 ? console.log("budget is accepted") : console.log("budget is not accepted")

