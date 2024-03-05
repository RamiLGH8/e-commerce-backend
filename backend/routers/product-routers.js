const router= require('express').Router();
const {AddProduct,GetAllProducts,ModifyProduct,Deleteproduct,GetProductsByCategory,GetNewArrivals}=require('../controllers/product-controller');
router.post('/addProduct',AddProduct);
router.get('/getAllProducts',GetAllProducts);
router.put('/modifyProduct/:name',ModifyProduct);
router.delete('/deleteProduct/:name',Deleteproduct);
router.get('/getProductsByCategory/:category',GetProductsByCategory);
router.get('/getNewArrivals',GetNewArrivals);
module.exports=router;