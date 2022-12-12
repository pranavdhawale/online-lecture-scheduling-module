// import packages
const bcrypt = require('bcrypt')

// import models
const Instructor = require('../model/Instructor.model')
const Lecture = require('../model/Lecture.model')

// test function
const test = (req, res) =>{
    console.log('Instructor Testing');
    res.send("Instructor Testing")
}

// login admin function
const loginInstructor = (req, res) => {
    const { username, password } = req.body

    // Instructor Check
    Instructor.findOne({ username: username }, function (err, instructor) {
        if (err) {
            res.status(500).json({
                error: err
            })
        }
        if (instructor) {
            // compare password
            bcrypt.compare(password, instructor.password, function (err, result) {
                if (err) {
                    res.status(500).json({
                        error: err
                    })
                }
                if (result) {
                    res.status(200).json({
                        message: "Instructor Login Successful",
                        user: instructor
                    })
                }
                else {
                    res.status(401).json({
                        message: "Password doesn't match"
                    })
                }
            })
        }
        else {
            res.status(401).json({
                message: "INSTRUCTOR NOT FOUND"
            })
        }
    })
}

// get list of all allocated lecture function
const getAllocatedLectureList = (req, res) => {
    const instructor_name = req.params.instructorName
    console.log(instructor_name);

    Instructor.findOne({ name: instructor_name} )
    .then(function (instructor) {
        console.log(instructor);
        Lecture.find({ instructor_name: instructor.name })
        .then(function (lectures) {
            console.log(lectures);
            res.status(200).json({
                lectures
            });
        })
        .catch(function (err) {
            res.status(500).json({
                error: err
            });
        });
    })
    .catch(function (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    })
}

module.exports = {
    test,
    loginInstructor,
    getAllocatedLectureList
}