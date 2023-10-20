// Immediately Invoked function expression

(function chai(){
    console.log(`Immediately Invoked`)
})();                                    // used to remove golbal pollution .. semocolon is must

( (name) => {
    console.log(`DB connected by ${name}`)
})("sumit")

console.log('hello ')