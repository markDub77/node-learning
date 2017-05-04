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

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58fe0d301664e4a672440672')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();

});
