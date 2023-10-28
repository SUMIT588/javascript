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
  //   console.log(data);
});

const promiseFour = new Promise(function (reject, resolve) {
  let error = true;
  if (!error) {
    resolve({ userName: "sumit", location: "hemja", age: 22 });
  } else {
    reject("An error occured");
  }
});

// promiseFour
//   .then((data) => {
//     console.log(data);
//     return data.userName;
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log("hey");
