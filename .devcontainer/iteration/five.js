const language = ["ruby", "java", "c++", "c", "javascript"]

language.forEach(function (items){
    // console.log(items)
})

language.forEach( (items) =>{
        //   console.log(items)
})

function printMe(item){
    // console.log(item)
}
// language.forEach(printMe)

language.forEach((item, index, arr) =>{
    // console.log(index, item, arr)
})

const myCoding = [
    {
        language : "javascript",
        fileName : "js",
    },
    {
        language : "java",
        fileName : "java",
    },
    {
        language : "ruby",
        fileName : "rb",
    },
]

myCoding.forEach((item) =>{
    console.log("language", item.language)
    console.log("fileName", item.fileName)
})