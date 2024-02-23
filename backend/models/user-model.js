const db = require('../config/db');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
   name:{
         type:String,
         required:[true,"Name is required"]
   },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "email format is not correct",
        ],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    birthdate:{
        type: String,
        required: [true, "Birthdate is required"]
    }});
    
    userSchema.pre("save",async function(){
        var user = this;
        if(!user.isModified("password")){
            return
        }
        try{
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password,salt);
            user.password = hash;
        }catch(err){
            throw err;
        }
    });
    userSchema.methods.comparePassword = async function (candidatePassword) {
        try {
            const isMatch = await bcrypt.compare(candidatePassword, this.password);
            return isMatch;
        } catch (error) {
            throw console.log('Password Incorrect');
        }
    };
const User = mongoose.model('User', userSchema);
module.exports = User;    
    
