const mongoose = require('mongoose');
const User = require('./user-model');
const { Schema } = mongoose;
const paymentSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    paymentMethod: String,
    paymentDetails: String
});
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
