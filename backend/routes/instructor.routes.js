const express = require('express')
const router = express.Router();

// import admin controller
const instructorController = require('../controller/instructor.controller')

// test
router.get('/', instructorController.test)

// login
router.post('/login', instructorController.loginInstructor)

// allocated lecture by instructor name
router.get('/allocated-lecture-list/:instructorName', instructorController.getAllocatedLectureList)

module.exports = router;