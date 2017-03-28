// // simplest example
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey. It worked!');
//     // reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage)
// });


// // three chains woa!
// var asyncAdd = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//       resolve(a + b);
//     } else {
//       reject('Arguments must be numbers')
//     }
//   });
// };
//
// asyncAdd(5, 7)
//
//   .then((result) => {
//     console.log('Result: ', result);
//     return asyncAdd(result, 33);
//   }, 
//    
//   (errorMessage) => {
//     console.log(errorMessage)
//   })
//
//   .then((result) => {
//     console.log('Should be 45', result);
//     return asyncAdd(result, 33);
//   },
//    
//   (errorMessage) => {
//     console.log(errorMessage);
//   })
//  
//   .then((result) => {
//     console.log('Should be 78', result);
//   });






// a different error handler
var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Arguments must be numbers')
    }
  });
};

asyncAdd(5, 7)

  .then((result) => {
    console.log('Result: ', result);
    return asyncAdd(result, 33);
  })

  .then((result) => {
    console.log('Should be 45', result);
    return asyncAdd(result, 33);
  })

  .then((result) => {
    console.log('Should be 78', result);
  })

  .catch((errorMessage) => {
    console.log(errorMessage);
  });