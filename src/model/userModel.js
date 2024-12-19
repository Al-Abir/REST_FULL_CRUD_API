const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(

    {

        firstName: { type: String },

        lastName: { type: String },

        rollNumber: { type: String },

        phoneNumber: { type: String },

        password: { type: String }

    },

    {

        versionKey: false,

        timestamps: true,

    }

);

module.exports = mongoose.model("users", DataSchema);


