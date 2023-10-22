// map function

const myNum = [1,2,3,4,5,6,7,8,9]
const num = myNum.map((num) =>{
    return num + 10
})
// console.log(num)

//chaining

const chainNum = myNum
                    .map((num) => (num*2))
                    .map((num) => (2*num))
                    .filter((num) => (num >= 32))

console.log(chainNum)