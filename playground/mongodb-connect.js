
// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');



var user={name:"avishek",age:23};
var {name}=user;
console.log(name);

//to create a connection with mongodb
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
        
    }
    console.log('connected to MongoDb server');

    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
            
        
        }
        console.log(JSON.stringify(result.ops,undefined,2));
        

    });
    // db.collection('Users').insertOne({ 
    //     name:'Avishek',
    //     age:23,
    //     location:"Bangalore"
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
        
    // });
    // db.close();
});