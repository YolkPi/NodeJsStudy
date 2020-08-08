const doWorkPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
          () => {
              //option1: success
              //resolve([1,2,3]);
              //option2: 
              reject('huoihu');
          }  
        , 2000);
    }
)

//then: resolve method
//catch: reject method
doWorkPromise.then((result) => {
    console.log('Success!', result);
}).catch((error) => {
    console.log('error' + error);
})