const router= require('express').Router();
const { RegisterUser , Login} = require('../controllers/user-controller');
const {GetProductsByCategory,GetNewArrivals}=require('../controllers/product-controller');
router.post('/register',RegisterUser);
router.post('/login',Login);
router.get('/products/:category',GetProductsByCategory);
router.get('/new-arrivals',GetNewArrivals);
module.exports=router;