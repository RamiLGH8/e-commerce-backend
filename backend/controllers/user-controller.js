const userService = require('../services/user-service');
exports.RegisterUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, birthdate } = req.body;
        const user = await userService.RegisterUser(name, email, password, birthdate);
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ err });
    } 

}
exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Parameter are not correct');
        }
        let user = await userService.CheckUserExists(email);
        if (!user) {
            throw new Error('User does not exist');
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }
        // Creating Token
        let tokenData;
        tokenData = { _id: user._id, email: user.email };
    
        const token = await userService.GenerateAccessToken(tokenData,"secret","1h")
        res.status(200).json({ status: true, success: "sendData", token: token });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}