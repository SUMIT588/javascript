// for loop
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element)
// }

// for (let i = 0; i <=10; i++) {
//  console.log(`Outer loop ${i}`)
//  for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner loop ${j}`);
//     console.log(`${i} * ${j} = ${i*j} `)
//  }
// }

// for (let i = 0; i <= 10; i++) {
//     const data = i;
//     if(i === 5){
//         console.log(`5 is connected`)
//         break;
//     }
//     console.log(i)
// }

for (let i = 0; i <= 5; i++) {
    if(i === 4){
        console.log("4 is detected")
        continue
    }
    console.log(i)
}