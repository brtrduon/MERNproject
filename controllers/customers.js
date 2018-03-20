const Customer = require('../models/customer');
// const mongoose = require('mongoose');
// const Customer = mongoose.model('Customer');

exports.reserve = function(req, res, next) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone_number = req.body.phone_number;
    const party_size = req.body.party_size;
    const date = req.body.date;
    const time = req.body.time;

    Customer.findOne({ phone_number: phone_number }, function(err, existingCustomer) {
        if (err) {
            console.log(err);
        }
        if (existingCustomer) {
            return res.status(422).send({ err: 'Phone number already used for reservation'});
        }
        const customer = new Customer({
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            party_size: party_size,
            date: date,
            time: time
        });
        customer.save(function(err) {
            if (err) {
                console.log(err);
            }
            res.json({ customer });
            console.log('customer saved');
        });
    });
}