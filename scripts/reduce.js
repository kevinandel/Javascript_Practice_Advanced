// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc,value) => acc + value, 0);
// console.log(sum);



// const arr = ['apple', 'orange', 'grapes', 'apple', 'orange', 'orange'];

// const finvalue = arr.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});

// console.log(finvalue);



//flattening array

// const nestarr = [[1,2], [3,4], [5,6]];
// const newarr = nestarr.reduce((acc,val) => {
//   acc = acc.concat(val);
//   return acc;
// }, []); 
// console.log(newarr);



// to find max term


// const arr = [1, 2, 3, 4, 5];
// const max = arr.reduce((acc,val) => {
//   if(val > acc) {
//     acc = val;
//   }
//   return acc;
// }, arr[0]); 
// console.log(max);



//count of characters

// const str = 'hello world';
// const count = str.split('').reduce((acc,val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// },{});
// console.log(count);




//Finding the Total of Squared Even Numbers

// const arr = [1,2,3,4,5,6,7,8,9];
// const tot = arr.filter((val) => {
//   return val % 2 === 0;
// }).map((val) => {
//   return val * val;
// }).reduce((acc,val) => {
//   acc = acc + val;
//   return acc;
// }, 0);
// console.log(tot);



//value above 600 and in that maximum price

// const products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Phone', price: 800 },
//   { name: 'Tablet', price: 600 },
//   { name: 'Monitor', price: 300 },
//   { name: 'Keyboard', price: 100 }
// ];

// const maxValue = products.filter((val) => val.price > 500).map((val) => val.price).reduce((acc,val) => val > acc ? val : acc, 0);
// console.log(maxValue);




//average age of users above 18

// const users = [
//   { name: 'Alice', age: 22 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 24 },
//   { name: 'David', age: 16 },
//   { name: 'Eve', age: 19 }
// ];

// const avg = users.filter((val) => val.age > 18).map((val) => val.age).reduce((acc,val, _, arr) => acc + val / arr.length, 0);
// console.log(avg);
