const mongoose = require('mongoose');
const User = require('./user-model');
const Product = require('./product-model');
const { Schema } = mongoose;
const cartSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    products: [{ 
        product: { type: mongoose.Schema.Types.ObjectId, ref: Product },
        quantity: { type: Number, default: 1 }
    }]
});
const Cart = mongoose.model('carts', cartSchema);
module.exports = Cart;