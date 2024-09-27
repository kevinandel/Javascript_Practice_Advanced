// const arr = [1,2,3,4];
// console.log(arr);

// const arr = [1,2,3,4];
// console.log(arr[arr.length - 1]);

// const arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.pop(5);
// console.log(arr);
// arr.shift(0);
// console.log(arr);



// const arr = [1,2,3,4,5,6,7];
// arr.splice(2,3,0,1,2);
// console.log(arr);


// const str = "hello";
// const str2 = str.split('');
// console.log(str2);



// const arr = [1,2,3,4,5,6,7];
// arr.splice(2,0,0,1,2);
// console.log(arr);


// const arr = [1,2,3,4,5,6,7];
// const arr2 = arr.slice(2,4);
// console.log(arr2);


// const arr = [1,2,3,4,5,6,7];
// console.log(arr.indexOf(5));

// const arr = [1,2,3,4,5,6,7];
// console.log(arr.includes(7));

// const numbers = [5, 3, 8, 1, 2];
// numbers.sort((a,b) => a - b);
// console.log(numbers);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(array1.concat(array2));

// const nestedArrays = [[1, 2], [3, 4], [5, 6]];
// const nest = nestedArrays.flat();
// console.log(nest);

// const array = [1, 2, 2, 3, 4, 4, 5];
// const newarr = [...new Set(array)];
// console.log(newarr);\




//Strings

// const chars = ['H', 'e', 'l', 'l', 'o'];
// const char = chars.join('');
// console.log(char);

// const string = "Hello";
// console.log(string[4])

// const string = "Hello";
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());


// const string = "Bananas are tasty. I like bananas.";
// const newstring = string.replace(/bananas/gi, 'apples') //g is to select all repetitions not only first one and i is to amke it case insensitive
// console.log(newstring);


// const string = "   Hello World   ";
// console.log(string.trim());

// const string = "apple,banana,orange";
// console.log(string.split(','));

// const array = ["apple", "banana", "orange"];
// console.log(array.join(','));

// const string = "Hello";
// console.log(string.split('').reverse().join(''));


// const obj = { a: 3, b: 4 };
// const obj2 = { c: 1, d: 2 };
// const copyObj = { e:100,...obj,...obj2 }; //spread operator
// // copyObj.a = 3
// console.log(copyObj);
// //console.log(obj);

// const [first, second, ...rest] = [1,2,3,4,5,6];
// console.log(first);
// console.log(second);
// console.log(rest);