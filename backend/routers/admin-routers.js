const router= require('express').Router();
const {AddProduct,GetAllProducts,ModifyProduct,Deleteproduct} = require('../controllers/product-controller');
router.post('/product',AddProduct,);
router.get('/products',GetAllProducts);
router.put('/modify-product/:name',ModifyProduct);
router.delete('/delete-product/:name',Deleteproduct);
module.exports=router;