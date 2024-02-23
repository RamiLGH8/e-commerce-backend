const router= require('express').Router();
const { RegisterUser , Login} = require('../controllers/user-controller');
router.post('/register',RegisterUser);
router.post('/login',Login);
module.exports=router;