const myKey = Symbol('mykey1')

const object = {
    name: "sumit",
    [myKey] : "key", 
    "fullName": "sumit thapa magar",
    age: 22,
    location: "pokhara",
    email:"mgrzsumit19@gmail.com",
    game: ["football", "volleyball", "basketball"]
}

// console.log(object.name)
// console.log(object["name"])
// console.log(object['fullName'])
// console.log(typeof object[myKey])

object.email = "anupbanstola2@gmail.com"
console.log(object["email"])
Object.freeze(object.age)                  //value doesnot overwrite
object.email = "helloworld@gmail.com"
console.log(object)

const newObject = {}

newObject.greeting = function(){
    console.log("hello world how are you")
}

// console.log(newObject.greeting())

object.greeting = function(){
    console.log(`My name is ${this.fullName}`)
}
console.log(object.greeting())