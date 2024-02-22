const router= require('express').Router();
const { RegisterUser } = require('../controllers/user-controller');
router.post('/register',RegisterUser);
module.exports=router;