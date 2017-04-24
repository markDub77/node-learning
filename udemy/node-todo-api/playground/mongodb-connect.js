// Make sure the Mongo database is running
// $ cd ~/mongo/bin
// $ ./mongod --dbpath ~/mongo-data


const MongoClient = require('mongodb').MongoClient;
// with destructuring the above line looks like
// const {MongoClient} = require('mongodb');


// Connect
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.collection('Weee').insertOne({
    text: 'weeee to do',
    completed: false,
    monkeyButt: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
  });


  db.close();
});
