const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: String
    },
    description: {
        type: String
    },
    image_name: {
        type: mongoose.Schema.Types.ObjectId
    },
    image_path:{
        type:String
    },
    lectures: {
        type: Array
    }

})

module.exports = mongoose.model("Course", Course)