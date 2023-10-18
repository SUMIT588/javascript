const marvelHeroes = ["ironman", "thor", "spiderman"]
const dcHeroes = ["batman", "flash", "superman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

// spread operator
// const all_new_heroes = [...marvelHeroes, ...dcHeroes]    // break the array 
// console.log(all_new_heroes)

// const newArray = [1,2,3,4,[5,6], [7,8,[9,10]]]
// const flatArray = newArray.flat(2)
// console.log(flatArray)

console.log(Array.isArray('Hitesh'))
console.log(Array.from("hitesh"))
console.log(Array.from({name: 'hitesh'}))         // interesting case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(100, score2, score3))
