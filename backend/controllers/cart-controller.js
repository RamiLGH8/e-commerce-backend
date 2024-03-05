const CartService=require('../services/cart-service');
exports.AddProductToCart=async(req,res)=>{
    try{
        const {userId,productId,quantity}=req.body;
        const cart=await CartService.AddProductToCart(userId,productId,quantity);
        return res.status(200).json({cart});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.GetCartByUserId=async(req,res)=>{
    try{
        const {userId}=req.params;
        const cart=await CartService.GetCartByUserId(userId);
        return res.status(200).json({cart});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.DeleteProductFromCart=async(req,res)=>{
    try{
        const {userId,productId}=req.body;
        const cart=await CartService.DeleteProductFromCart(userId,productId);
        return res.status(200).json({cart});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.EmptyCart=async(req,res)=>{
    try{
        const {userId}=req.params;
        const cart=await CartService.EmptyCart(userId);
        return res.status(200).json({cart});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.UpdateProductQuantity=async(req,res)=>{
    try{
        const {cartId,productId,quantity}=req.body;
        const cart=await CartService.UpdateProductQuantity(cartId,productId,quantity);
        return res.status(200).json({cart});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.DeleteCart=async(req,res)=>{
    try{
        const {userId}=req.params;
        const cart=await CartService.DeleteCart(userId);
        return res.status(200).json({cart});
    }
    catch(err){
        return res.status(500).json({err});
    }
}