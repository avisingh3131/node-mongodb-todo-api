
// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
        
    }
    console.log('connected to MongoDb server');



db.collection('Users').findOneAndUpdate({
    
        _id: new ObjectID("5b7bc05853aba0249c216f47")
    },
    {
        $set: {
            name:"Avishek"
        },
        $inc:{
            age:2
        }
    },{
        returnOriginal:false
    
}).then((result)=>{
     console.log(result);
    
 });


});