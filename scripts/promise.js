const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if(success) {
    resolve('Success');
  }
  else {
    reject('Failed');
  }
})

myPromise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
})