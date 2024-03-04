const Order=require('../models/order-model');
const Cart=require('../models/cart-model');
class OrderService{
    static async GetAllOrders(){
        try{
            const orders=await Order.find();
            return orders;
        }
        catch(err){
            throw err;
        }
    }

    static async GetOrdersByUserId(userId){
        try{
            const orders=await Order.find({user:userId});
            return orders;
        }
        catch(err){
            throw err;
        }
    }

     static async CreateOrder(cartId,shippingAddress,paymentInformation){
         try{
            const cart=await Cart.findOne({_id:cartId}).populate('products.product');
            let totalPrice=0;
            cart.products.forEach(product=>{
                totalPrice+=product.product.price*product.quantity;
            });
             const order=await Order.create({cart:cartId,totalPrice,shippingAddress,paymentInformation});
             return order;
         }
         catch(err){
             throw err;
         }
     }
    
    static async DeleteOrder(orderId){
      try{
         const order=await Order.findOneAndDelete({_id:orderId});
            return order;
      }
      catch(err){
          throw err;
      }

    }

    static async UpdateOrderStatus(orderId,status){
        try {
           const order=await Order.findByIdAndUpdate({_id:orderId},{status},{new:true});
           return order;
        }
        catch(err){
            throw err;
        }
    }
}
module.exports=OrderService;