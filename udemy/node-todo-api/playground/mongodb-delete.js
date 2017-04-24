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




  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });



  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });



  // findOneAndDelete - favored
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });



  // db.close();

});
