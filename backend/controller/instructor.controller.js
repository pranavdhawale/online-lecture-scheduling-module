// import packages
const bcrypt = require('bcrypt')

// import models
const Instructor = require('../model/Instructor.model')

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

module.exports = {
    test,
    loginInstructor
}