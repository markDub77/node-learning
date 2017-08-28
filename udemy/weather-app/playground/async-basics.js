// this file illustrates async, or non blocking programing

// the order of the log will be:
// Starting app
// Finishing up
// 2nd callback
// Inside of callback

// The reason that the 2nd callback happens after finishing up is that 2nd callback has to go through the Node APIs and callback queue 


console.log('Starting app');

setTimeout(() =>{
  console.log('Inside of callback');
}, 2000);


setTimeout(() =>{
  console.log('2nd callback');
}, 0);


console.log('Finishing up');
