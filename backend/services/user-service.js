class UserService{
    static async RegisterUser(name,email,password,birthdate){
        try{
            const user = new User({name,email,password,birthdate});
            return await user.save();
        }catch(err){
            throw err;
        }
    }
}