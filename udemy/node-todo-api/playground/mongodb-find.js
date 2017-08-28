// Make sure the Mongo database is running
// $ cd ~/mongo/bin
// $ ./mongod --dbpath ~/mongo-data

// const MongoClient = require('mongodb').MongoClient;
// with destructuring the above line looks like, with the added ObjectID
const {MongoClient, ObjectId} = require('mongodb');


// Connecting
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');





//// Find toArray
db.collection('Foo').find(

  // This is optional, without this it will find everything
  {
  _id: new ObjectId('599edbc9a7dbfd452d872925')
  // completed: false
  }).toArray().then((docs) => {
  console.log('Foo');
  console.log(JSON.stringify(docs, undefined, 2))
}

, (err) => {
  console.log('Unable to fetch todos', err);
});






//// Count
//   db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
//
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });
  
  
  
db.close();




});
