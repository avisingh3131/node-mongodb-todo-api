
// const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
        
    }
    console.log('connected to MongoDb server');

    // db.collection('Todos').find({
    //     _id:new ObjectID("5b7bbfcff8b91a16fce7a1a6")
    // }).toArray().then((docs)=>{
    //    console.log("Todos");
    //    console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //            return console.log('Unable to fetch todo',err);
    // });
    // db.collection('Todos').find().count().then((docs)=>{
    //    console.log("Todos");
    //    console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //            return console.log('Unable to fetch todo',err);
    // });
    db.collection('Users').find({name:'Avishek'}).toArray().then((docs)=>{
        console.log("Users");
        console.log(JSON.stringify(docs,undefined,2));
     },(err)=>{
                return console.log('Unable to fetch todo',err);
     });
    // });
    // /db.close();
});