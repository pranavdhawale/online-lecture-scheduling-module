// import .env
require('dotenv').config()

// import packages
const bcrypt = require('bcrypt')
const nodeMailer = require('nodemailer')

// import models
const Admin = require('../model/Admin.model')
const Instructor = require('../model/Instructor.model')
const Course = require('../model/Course.model')
const Lecture = require('../model/Lecture.model')

// global variables
const saltRounds = 10

// test function
const test = (req, res) =>{
    console.log('Admin Testing');
    res.send("Admin Testing")
}

// register admin function
const registerAdmin = (req, res) => {
    const { username , name, password } = req.body

    // Admin check
    Admin.findOne({ username: username })
    .then(function (adminData) {
        if (adminData) {
            res.status(400).json({
                message: "Admin already exist"
            })
        }
        else {
            bcrypt.hash(password, saltRounds, function(err, hashedPassword) {
                if (err){
                    res.status(401).json({
                        err: err
                    })
                }
                const admin = new Admin({
                    username,
                    name,
                    password: hashedPassword
                })
                admin.save()
                    .then(function (result) {
                        res.status(201).json({
                            message: "Admin created successfully"
                        })
                    })
                    .catch(function (err) {
                        res.status(500).json({
                            error: err
                        })
                    })
            })
        }
    })
}

// login admin function
const loginAdmin = (req, res) => {
    const { username, password } = req.body

    // Admin Check
    Admin.findOne({ username: username }, function (err, admin) {
        if (err) {
            res.status(500).json({
                error: err
            })
        }
        if (admin) {
            // compare password
            bcrypt.compare(password, admin.password, function (err, result) {
                if (err) {
                    res.status(500).json({
                        error: err
                    })
                }
                if (result) {
                    res.status(200).json({
                        message: "Admin Login Successful"
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
                message: "ADMIN NOT FOUND"
            })
        }
    })
}

// add instructor function
const addInstructor = (req, res) => {
    const { name, email } = req.body

    // Instructor check
    Instructor.findOne({ name: name })
    .then(function (instructorData) {
        if (instructorData) {
            res.status(400).json({
                message: "Instructor already exist"
            })
        }
        else {
            const instructor = new Instructor({
                name,
                email
            })
            instructor.save()
                .then(function (result) {
                    res.status(201).json({
                        message: "Instructor created successfully"
                    })
                })
                .catch(function (err) {
                    res.status(500).json({
                        error: err
                    })
                })
        }
    })
}

// add course function
const addCourse = (req, res) => {
    const { name, level, description } = req.body

    // Course check
    Course.findOne({ name: name })
    .then(function (courseData) {
        if (courseData) {
            res.status(400).json({
                message: "Course already exist"
            })
        }
        else {
            const course = new Course({
                name,
                level,
                description,
            })
            course.save()
                .then(function (result) {
                    res.status(201).json({
                        message: "Course created successfully"
                    })
                })
                .catch(function (err) {
                    res.status(500).json({
                        error: err
                    })
                })
        }
    })
}

// allocate lecture function
const allocateLecture = (req, res) => {
    const { course_name, instructor_id, date } = req.body
    // Lecture check
    Lecture.findOne({ instructor_id: instructor_id, date: date})
    .then(function (lectureData) {

        if (lectureData) {
            res.status(400).json({
                message: "Instructor already has lecture on that date"
            })
        }
        else {
            const lecture = new Lecture({
                course_name,
                instructor_id,
                date
            })
            lecture.save()
            Instructor.findOne({ _id: instructor_id })
                .then(function (instructor) {
                    Course.findOne({ name: course_name })
                        .then(function (course) {

                            const transporter = nodeMailer.createTransport({
                                service: "gmail",
                                auth: {
                                    user: process.env.EMAIL,
                                    pass: process.env.PASSWORD
                                },
                                port: 587,
                                host: "smtp.gmail.com"
                            })
                
                            console.log("Transporter ready to send mail");
                
                            const mailOptions = {
                                from: process.env.EMAIL,
                                to: instructor.email,
                                subject: "Lecture Allocated",
                                text: "Hey! " + instructor.name + ",\nYou have been allocated an lecture of " + course.name + " on " + date + "\nThanks!"
                            }

                            console.log("Mail Drafted");

                            transporter.sendMail(mailOptions, function (err, info) {
                                if (err) {
                                    console.log(err);
                                    res.status(500).json({
                                        message: 'Oops, something went wrong!',
                                        error: err
                                    })
                                }
                                else {
                                    console.log("Mail Sent " + info.response);
                                    res.status(200).json({
                                        message: 'Lecture allocated & Mail sent successfully!'
                                    });
                                }
                            })

                            instructor.lectures.push(lecture._id)
                            course.lectures.push(lecture._id)
                            instructor.save()
                            course.save()
                        })
                })
        }
    })
    .catch(function (err) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    })
}

module.exports = {
    test,
    registerAdmin,
    loginAdmin,
    addInstructor,
    addCourse,
    allocateLecture
}