
// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
        
    }
    console.log('connected to MongoDb server');

//    db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
//        console.log(result);
       
//    });
//    db.collection('Todos').deleteOne({text:'Something to do'}).then((result)=>{
//     console.log(result);
    
// });

// db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
//     console.log(result);
    
// });

// db.collection('Users').deleteMany({name:'Avishek'}).then((result)=>{
//     console.log(result);
    
// });

// db.collection('Users').findOneAndDelete({
//     _id:new ObjectID("5b7bd474319bde09942875ec")
// }).then((results)=>{
//     console.log(JSON.stringify(results,undefined,2));
    
// });
    // db.close();
});