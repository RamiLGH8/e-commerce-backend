const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, enum:['T-Shirt','Shirt','Pant','Shoe','Jacket'], required: true },
    sizesAvailable: [String],
    colorsAvailable: [String],
    images: [String],
    stockQuantity: { type: Number, default: 0 }
   
},{timestamps:true});
const Product = mongoose.model('products', productSchema);
module.exports = Product;