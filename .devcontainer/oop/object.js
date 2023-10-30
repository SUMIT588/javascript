function user(username,score ){
this.username = username,
this.score = score
}

user.prototype.increment = function(){
            this.score++
            console.log(this.score)
}

user.prototype.printMe = function(){
    console.log(`Your bill is ${this.score}`)
}

const tea =  new user("sumit", 50)
console.log(tea.increment())
console.log(tea.printMe())