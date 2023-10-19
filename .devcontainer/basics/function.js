// function add(num1, num2){
//  let result = num1 + num2
//  return result
//  console.log('hello world')             // function stops after return function so don't console
// }

// console.log("Result", add(1,3))

function greeting(username = "bijen") {
  // default value
  if (!username) {
    console.log("please enter your username");
    return;
  }
  return `Hello my name is ${username}`;
}

// console.log(greeting("sumit"))                    //overwrite the default value with the given argument

function number(value1, value2, num) {
  return num;
}

// console.log(number(100,200,300, 400))

// passing argument as object

const userDetails = {
  name: "sumit",
  location: "pokhara",
};

function user(user) {
  return `Hello everyone, my name is ${user.name} and I am from ${user.location}`;
}
// console.log(user(userDetails))

console.log(
  user({
    name: "sumit",
    location: "kathmandu",
  })
);

// passing argument as array
function arrayFunction(array) {
  console.log(`hello everyone I am ${array[0]} years old`);
}

const array1 = [30, 20, 50];
// arrayFunction(array1);
arrayFunction([20,40])
