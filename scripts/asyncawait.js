const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success =false;
    if(success) {
      resolve('Success');
    }
    else {
      reject('Failed');
    }
  }, 3000);
  });

  async function getData() {
    try {
      console.log('Fetching...')
      const data = await fetchData;
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }


getData();