const heroes = ["salman khan", "amir khan", "sharuk khan"]

for (const num of heroes) {
    // console.log(`${num} is `)
}

const string  = "string"
for (const num of string) {
//    console.log(`Each charater is ${num}`) 
}

//map datatype
const map = new Map()
map.set("usa", "United States of America")
map.set("Uk", "united kingdom")
map.set("np", "Nepal")
map.set("np", "Nepal")               // only takes unique value and in order of the set key and value

// console.log(map)

for (const [value, key] of map) {
    console.log(key , ": -", value)
}

// in forof loop it always picks the value instead of key