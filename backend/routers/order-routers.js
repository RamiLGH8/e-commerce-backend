const router= require('express').Router();
const {CreateOrder,GetOrdersByUserId,GetAllOrders,UpdateOrderStatus,DeleteOrder}=require('../controllers/order-controller');
router.post('/createOrder',CreateOrder);
router.get('/getOrdersByUserId/:userId',GetOrdersByUserId);
router.get('/getAllOrders',GetAllOrders);
router.put('/updateOrderStatus/:orderId',UpdateOrderStatus);
router.delete('/deleteOrder/:orderId',DeleteOrder);
module.exports=router;