const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb+srv://rami:e2T5un9uqfMZfbL1@e-commerce.atue77v.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce').then(()=>{
    console.log("Connected to Database");
}).catch(err=>console.log('this is the error: '+err));
module.exports=connection;