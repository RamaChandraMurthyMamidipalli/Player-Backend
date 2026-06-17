const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({

    name: {
        type: String
    },

    country: {
        type: String
    },

    role: {
        type: String
    },

    team: {
        type: String
    },

    age: {
        type: Number
    }

})

module.exports = mongoose.model("Player", PlayerSchema)