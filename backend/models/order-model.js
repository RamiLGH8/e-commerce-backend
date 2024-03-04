const mongoose = require('mongoose');
const { Schema } = mongoose;
const Cart = require('./cart-model');
const orderSchema = new Schema({
    cart :{ type: mongoose.Schema.Types.ObjectId, ref: Cart, required: true },
    totalPrice: { type: Number, required: true },
    shippingAddress: String,
    paymentInformation: String,
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' }
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;