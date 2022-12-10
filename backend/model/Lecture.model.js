const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lecture = new Schema({
    course_name: {
        type: String,
        required: true
    },
    instructor_id: {
        type: String,
        required: true
    },
    date: {
        type: String
    }

})

module.exports = mongoose.model("Lecture", Lecture)