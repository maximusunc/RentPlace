const validator = require('validator');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    email: {
        type: String, required:true,
        index: { unique: true },

        // looking at the validator npm docs, these validations have to happen in the server, before they go to the database.
        // I was getting errors because mongoose doesn't support validator in its schemas.
        
        // validate: { 
        //     validator: isEmail, 
        //     message: 'Invalid email.' 
        // }
    },
    address1: { type: String},
    address2: { type: String},
    city: { type: String},
    state: { type: String },
    zip: { type: String,
        // validate: {
        //     validator: isPostalCode,
        //     message: 'Invalid Zip Code'
        // }, 
    },
    phone: { type: String }
});

const User = mongoose.model("User", userSchema);

module.exports = User;