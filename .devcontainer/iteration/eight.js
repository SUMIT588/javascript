// reduce function

const num = [1, 2, 3, 4, 5];

// const myNum = num.reduce((acc, curr) =>{
//     console.log(`acc : ${acc}, curr : ${curr}`)
//     return acc + curr
// }, 0)

// console.log(myNum)

const shoppingCart = [
  {
    name: "mobile",
    price: 10000,
  },
  {
    name: "books",
    price: 2000,
  },
  {
    name: "earphone",
    price: 2000,
  },
  {
    name: "tablet",
    price: 5000,
  },
  {
    name: "mac",
    price: 10000,
  },
];

// const total = shoppingCart
//   .map((item) => item.price)
//   .reduce((acc, curr) => {
//     console.log(acc, curr);
//     return acc + curr;
//   }, 0);


const total = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
console.log(total);
