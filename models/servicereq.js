const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongo layout for service requests
const serviceReqSchema = new Schema({
    _landlord: { type: Schema.Types.ObjectId, ref: 'User' },
    _tenant: { type: Schema.Types.ObjectId, ref: 'User' },
    _property: { type: Schema.Types.ObjectId, ref: 'Property' },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    notes: String,
    date: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false }
});

const ServiceReq = mongoose.model("ServiceReq", serviceReqSchema);

module.exports = ServiceReq;