const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    _landlord: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    _tenant: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: {
        type: String, 
        required: true,

        // See user.js for a note about validate
        
        // validate: {
        //     validator: isPostalCode,
        //     message: 'Invalid Zip Code'
        // },
    },
    leaseStart: { type: Date },
    leaseEnd: { type: Date },
    rentAmt: { type: String }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
