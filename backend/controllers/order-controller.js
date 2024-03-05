const ordersService=require('../services/order-service');
exports.CreateOrder=async(req,res)=>{
    try{
        const {cartId,shippingAddress,paymentInformation}=req.body;
        const order=await ordersService.CreateOrder(cartId,shippingAddress,paymentInformation);
        return res.status(200).json({order});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.GetAllOrders=async(req,res)=>{
    try{
        const orders=await ordersService.GetAllOrders();
        return res.status(200).json({orders});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.GetOrdersByUserId=async(req,res)=>{
    try{
        const {userId}=req.params;
        const orders=await ordersService.GetOrdersByUserId(userId);
        return res.status(200).json({orders});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.DeleteOrder=async(req,res)=>{
    try{
        const {orderId}=req.params;
        const order=await ordersService.DeleteOrder(orderId);
        return res.status(200).json({order});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
exports.UpdateOrderStatus=async(req,res)=>{
    try{
        const {orderId}=req.params;
        const {status}=req.body;
        const order=await ordersService.UpdateOrderStatus(orderId,status);
        return res.status(200).json({order});
    }
    catch(err){
        return res.status(500).json({err});
    }
}
