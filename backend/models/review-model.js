const mongoose = require('mongoose');
const User = require('./user-model');
const Product = require('./product-model');
const { Schema } = mongoose;
const reviewSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: Product, required: true },
    rating: { type: Number, min: 1, max: 5 },
    reviewText: String,
    timestamp: { type: Date, default: Date.now }
});
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;