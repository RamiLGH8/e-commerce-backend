const router= require('express').Router();
const{AddProductToCart,GetCartByUserId,DeleteProductFromCart,UpdateProductQuantity,EmptyCart,DeleteCart}=require('../controllers/cart-controller');
router.post('/addProductToCart',AddProductToCart);
router.get('/getCartByUserId',GetCartByUserId);
router.put('/deleteProductFromCart',DeleteProductFromCart);
router.put('/updateProductQuantity',UpdateProductQuantity);
router.patch('/emptyCart/:cartId',EmptyCart);
router.delete('/deleteCart/:_id',DeleteCart);
module.exports=router;