const language = ["js", "cpp", "ruby", "java"]

const values = language.forEach((item) =>{
    return item                                            // forEach() doesnot return any value
})

// console.log(values)

const myNum = [1,2,3,4,5,6,7]
const filter = myNum.filter((num) =>{
    return num > 5
})
// console.log(filter)

const anotherNum = []
myNum.forEach((num) =>{
    if(num>5){
        anotherNum.push(num)
    }
})

// console.log(anotherNum)

const books = [
    {
        bookName : "chihan ko pari",
        genre : "love",
        publish : 1992
    },
    {
        bookName : "hitler",
        genre : "history",
        publish : 1994
    },
    {
        bookName : "gandhi",
        genre : "political",
        publish : 1880
    },
    {
        bookName : "mahabharat",
        genre : "myth",
        publish : 800
    },
]

const bookValues = books.filter((book)=>{
    return book.genre === "history"
})

// console.log(bookValues)