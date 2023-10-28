const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Task 1 created");
    resolve();
  }, 1000);
});

promise.then(() => {
  //   console.log("Resolve is called");
});

// second promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("async 1 executed");
    resolve();
  }, 1000);
}).then(() => {
  //   console.log("async 2 executed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setInterval(function () {
    resolve({ userName: "SumitMgr", email: "mgrzsumit19@gmail.com" });
  }, 1000);
});
promiseThree.then((data) => {
  // console.log(data);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(
    function () {
      let error = false;
      if (!error) {
        resolve({ userName: "sumit", location: "hemja", age: 23 });
      } else {
        reject("An error occured");
      }
    },

    1000
  );
});

promiseFour
  .then((data) => {
    return data.userName
  })
  .then((name)=>{
    console.log("name:", name)
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=> console.log("promises is either resolved or rejected"));


  //handling promises using async function

  const promiseFive = new Promise(function(resolve, reject){
    let error = true;
    if(error){
      resolve({language: "javascript"})
    }else{
      reject("JS IS NOT RESOLVED")
    }
  })

  async function consumePromiseFive(){
    try {
      const data = await promiseFive
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  consumePromiseFive()

// using fetch

  async function fetchMethod(){
    try {
       const response = await fetch('https://api.github.com/users/SUMIT588')
       const data = await response.json() 
       console.log(data.location) 
     } catch (error) {
      console.log(error)
     }
  }
  // fetchMethod()

  // fetch method using .then and .catch

  fetch("https://api.github.com/users/SUMIT588").then((data)=>{
    return data.json().then((data)=>{
      console.log(data)
    }).catch(error => console.log(error))
  })