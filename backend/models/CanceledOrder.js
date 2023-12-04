const mongoose = require("mongoose");

const cancelledOrderSchema = mongoose.Schema({
  // Define the schema for cancelled orders here
  // Similar to your existing orderSchema
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
},

orderItems: [
    {
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    },
],

shippingAddress: {
    address: { type: String, required: true},
    city: {type: String, required: true},
    distric: {type: String, required: true},
    postalCode: {type: String, required: true},
},

paymentMethod: {
    type: String,
},

paymentResult: {
    id: {type: String},
    status: {type: String},
    update_time: {type: String},
    email_address: {type: String},
},

itemsPrice: {
    type: Number,
    
    
},

taxPrice: {
    type: Number,
    
},

shippingPrice: {
    type: Number,
    
}, 

totalPrice: {
    type: Number,
    
},


paidAt: {
    type: Date,
},


deliveredAt: {
    type: Date,
},



});

const CancelledOrder = mongoose.model("CancelledOrder", cancelledOrderSchema);

module.exports = CancelledOrder;
