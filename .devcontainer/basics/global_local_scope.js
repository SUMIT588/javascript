//scope
if (true) {
  const a = 200;
  let c = 300;
  var b = 100; // var has global scope
}
// console.log(b)

function one() {
  let name = "sumit";
  function two() {
    let username = "alexandar";
    console.log(name);
  }
  two();
}

one();

if(true){
  const username="sumit"
  if(username==="sumit"){
    console.log("success if")
    const website = "crunchypy.com"
    console.log(username + website)
  }
  // console.log(website)
}


// interesting -----------------------

console.log(addNum(3))
function addNum(num){
  return num + 1
}

const subNum = function(num){
  return num -1
}
console.log(subNum(4))


