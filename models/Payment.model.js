const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  amount: { type: Number },
  date: { type: Date, default: Date.now },
  // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client'}
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;