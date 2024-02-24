const mongoose = require('mongoose');
const { Schema } = mongoose;
const Product = require('./product-model');
const User = require('./user-model');
const orderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    products: [{ 
        product: { type: mongoose.Schema.Types.ObjectId, ref: Product },
        quantity: { type: Number, default: 1 }
    }],
    totalPrice: { type: Number, required: true },
    shippingAddress: String,
    paymentInformation: String,
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' }
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;