const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Lease = new LeaseSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
);
const Lease = mongoose.model("Lease", LeaseSchema);

module.exports = Lease;