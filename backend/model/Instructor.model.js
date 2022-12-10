const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Instructor = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lectures: {
        type: Array
    }
})

module.exports = mongoose.model("Instructor", Instructor)