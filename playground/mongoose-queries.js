
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {ObjectID}=require('mongodb');
const {User}=require('./../server/models/user');

// var id="5b7c08622c9822bc234b965d";

// if(!ObjectID.isValid(id)){
//     console.log('ID is not valid');
    
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
    
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todos',todo);
    
// });

// Todo.findById({
//     _id:id
// }).then((todo)=>{
//     if(!todo){
//     console.log('ID not found');

//     }
//     console.log('Todo By id',todo);
    
// }).catch((e)=>console.log(e));


User.findById('5b7c127a80fe001c094c3337').then((user)=>{
 if(!user){
     return console.log("Unable to find user");
     
 }
 console.log(JSON.stringify(user,undefined,2));
 
},(e)=>{
    console.log(e);
    
}
);



