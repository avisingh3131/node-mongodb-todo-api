var mongoose=require("mongoose");

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');//to connect with the mongodb

module.exports={mongoose};