// run this file with "npm run test-watch"

// Make sure the Mongo database is running
// $ cd ~/mongo/bin
// $ ./mongod --dbpath ~/mongo-data


// library imports
const expect = require('expect');
const request = require('supertest');

// local imports
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// clears out the database
beforeEach((done) => {
   Todo.remove({}).then(() => done());
});


describe('POST /todos', () => {

    it('should create a new todo', 
        
        // done means it's async
        (done) => {

        // just some text to test with
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text);
                done();
            }).catch((e) => done(e));
        });
    });

    it('should not create todo with invalid body data',

        // done means it's async
        (done) => {
       request(app)
           .post('/todos')
           .send({})
           .expect(400)
           .end((err, res) => {
               if (err) {
                   return done(err);
               }

               Todo.find().then((todos) => {
                   expect(todos.length).toBe(0);
                   done();
               }).catch((e) => done(e));
           });
       });
});
