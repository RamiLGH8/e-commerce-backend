const router= require('express').Router();
const{AddProductToCart,GetCartByUserId,DeleteProductFromCart,UpdateProductQuantity,EmptyCart,DeleteCart}=require('../controllers/cart-controller');
router.post('/addProductToCart',AddProductToCart);
router.get('/getCartByUserId/:userId',GetCartByUserId);
router.delete('/deleteProductFromCart',DeleteProductFromCart);
router.put('/updateProductQuantity',UpdateProductQuantity);
router.put('/emptyCart/:userId',EmptyCart);
router.delete('/deleteCart/:userId',DeleteCart);
module.exports=router;