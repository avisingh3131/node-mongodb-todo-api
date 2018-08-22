
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {User}=require('./../server/models/user');



// Todo.remove({}).then((result)=>{
//     console.log(result);
    
// });

// Todo.findOneAndRemove({_id:'5b7c127a80fe001c094c3337'}).then((todo)=>{
//     console.log('Todo By id',todo);
    
// });

Todo.findByIdAndRemove('5b7c127a80fe001c094c3337').then((todo)=>{
    console.log('Todo By id',todo);
    
});





