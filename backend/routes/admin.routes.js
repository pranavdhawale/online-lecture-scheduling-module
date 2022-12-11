const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// import admin controller
const adminController = require('../controller/admin.controller')

// test
router.get('/', adminController.test)

// register
router.post('/register', adminController.registerAdmin)

// login
router.post('/login', adminController.loginAdmin)

// add instructor
router.post('/add-instructor', adminController.addInstructor)

// get all instructor
router.get('/instructor-list', adminController.getAllInstructors)

// add course
router.post('/add-course', adminController.addCourse)

// get all courses
router.get('/course-list', adminController.getAllCourses)

// allocate lecture
router.post('/allocate-lecture', adminController.allocateLecture)

// allocated lecture by instructor name
router.post('/allocated-lecture-list/:instructorName', adminController.getAllocatedLectureList)

module.exports = router;