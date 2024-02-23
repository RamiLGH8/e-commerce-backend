const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
 
class UserService{
    static async RegisterUser(name,email,password,birthdate){
        try{
            const user = await User.create({name,email,password,birthdate});
            return user;
        }catch(err){
            throw err;
        }
    }
    static async CheckUserExists(email){
        try{
            const user = await User.findOne({email});
            return user;
        }
        catch(err){
            throw err;
        }
    }
    static async GenerateAccessToken(tokendata,SECRET_KEY,expiresIn){
        try{
            const token = await jwt.sign(tokendata,SECRET_KEY,{expiresIn});
            return token;
        }catch(err){
            throw err;
        }

    }

}
module.exports = UserService;