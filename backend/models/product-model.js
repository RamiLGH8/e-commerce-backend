const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, required: true },
    sizesAvailable: [String],
    colorsAvailable: [String],
    images: [String],
    stockQuantity: { type: Number, default: 0 }
   
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;