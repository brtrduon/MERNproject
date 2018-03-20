const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    first_name: String,
    last_name: String,
    phone_number: { type: String, unique: true },
    party_size: Number,
    date: String,
    time: String
});

const modelClass = mongoose.model('Customer', customerSchema);
const Customer = mongoose.model('Customer', customerSchema);

module.exports = modelClass;