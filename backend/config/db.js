const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://rami:Z2ldtvYvFYdJtoSF@ac-tspszkh-shard-00-00.atue77v.mongodb.net:27017,ac-tspszkh-shard-00-01.atue77v.mongodb.net:27017,ac-tspszkh-shard-00-02.atue77v.mongodb.net:27017/?ssl=true&replicaSet=atlas-enev2y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=e-commerce').then(()=>{
    console.log("Connected to Database");
}).catch(err=>console.log('this is the error: '+err));
module.exports=connection;