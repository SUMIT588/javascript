const newObject = new Object()    // singleton
const newObject2 = {}             // not singleton but internally they are same

const obj1 = {
    1 : 'a',
    2: 'b'
}

const obj2 = {
    3 : 'c',
    4 : 'd'
}

// const obj3 = Object.assign({},obj1, obj2)      // assign(target, source) best idea is to add {} as target
// console.log(obj3)

// spread operator mostly used

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const arrayObject = [
    {
        name: "Sumit", 
        age: 23
    },
    {

    }, 
    {

    }
]

// console.log(arrayObject[0].name)

const tinder = {
    name : "alexandar", 
    location: "australia", 
    age: 23
}

// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))
// console.log(tinder.hasOwnProperty('name'))

// object destructuring
const data = {
    courseInstructor: "Rabin", 
    location: "kathmandu",
    isLoggedIn : false
}

const {courseInstructor:instructor} = data
console.log(instructor)


// json javascript object notation

{
    "game" : "mobilelegend",
    "player" : "sumit", 
    "heroes" : "lancelot"
}

[
    {

    },
    {

    }
]