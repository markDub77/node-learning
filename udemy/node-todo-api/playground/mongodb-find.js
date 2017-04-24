// Make sure the Mongo database is running
// $ cd ~/mongo/bin
// $ ./mongod --dbpath ~/mongo-data

// const MongoClient = require('mongodb').MongoClient;
// with destructuring the above line looks like, with the added ObjectID
const {MongoClient, ObjectID} = require('mongodb');


// Connecting
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');





// // Find toArray
// db.collection('Todos').find(
//
//   //// This is optional, without this it will find everything
//   //{
//   // _id: new ObjectID('58f90de724ecb952c5d8c989')
//   // completed: false
//   //}
//
// ).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2))
//
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });






// Count
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);

  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();




});
