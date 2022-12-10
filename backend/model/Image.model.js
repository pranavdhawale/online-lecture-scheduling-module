const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Image = new Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Image", Image)