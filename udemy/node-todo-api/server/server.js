// run this file with "node server/server.js"

// Make sure the Mongo database is running
// $ cd ~/mongo/bin
// $ ./mongod --dbpath ~/mongo-data


// library imports
var express = require('express');
var bodyParser = require('body-parser');


// local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


// using middleware
app.use(bodyParser.json());


app.post('/todos', (req, res) => {

    // console.log(req.body);

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos', (req, res) => {
   Todo.find().then((todos) => {
       res.send({todos});
   }, (e) => {
       res.status(400).send(e);
   });
});


// app.get('/todos/:id', (reg, res) => {
//     var id = req.params.id;
//
//     // Valid id using isValid
//     // 404 - send back empty send
//
//     // findById
//     // success
//     // error
//     // 400 -
// });


// test-watch was failing with "Uncaught Error: listen EADDRINUSE :::3000"
// http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
if(!module.parent) {
    app.listen(3000, () => {
        console.log('Started on port 3000');
    });
}

module.exports = {app};
