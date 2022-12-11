const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lecture = new Schema({
    course_name: {
        type: String,
    },
    instructor_name: {
        type: String,
    },
    date: {
        type: String
    }

})

module.exports = mongoose.model("Lecture", Lecture)