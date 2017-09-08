const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// // removes all todos
// Todo.remove({}).then(
//     (result) => {
//         console.log(result);
// });


// // Todo.findByIdAndRemove
// Todo.findByIdAndRemove('59b29ae9817c370294629e63').then(
//     (todo) => {
//             console.log(todo);
//     }
// );


// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '59b29ae9817c370294629e63'}).then((todo) => {
        console.log(todo);
});
