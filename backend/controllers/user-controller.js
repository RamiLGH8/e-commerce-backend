const userService = require('../services/user-service');
 const RegisterUser = async (req, res) => {
    try {
        const { name, email, password, birthdate } = req.body;
        const user = await userService.RegisterUser(name, email, password, birthdate);
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(500).json({ err });
    } 

}
module.exports = { RegisterUser };