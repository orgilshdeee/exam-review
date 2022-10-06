const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    date:{
        type: Date
    }
})

const Users = mongoose.model("User", userSchema)

module.exports = Users