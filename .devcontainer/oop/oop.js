const oop = {
    userName : "sumit",
    action : function(action){
           console.log("action is :", action)
    }
}

// oop.action("push")

function check(userName, location, skill){
    this.userName = userName,
    this.location = location,
    this.skill = skill,
    this.greeting = function (){
        console.log(`Welcome ${this.userName}`)
    }
    // return this          implicitly return
}

const check1 = new check("sumit","hemja","coding")   // create new instance
const check2 = new check("bijen", "chitwan", "fishing")

console.log(check1 instanceof check)
console.log(check1 instanceof Object)
console.log(check1)






// steps while using new
// 1 : create new empty object
// 2 : call constructor function
// 3 : 