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

// add course
router.post('/add-course', adminController.addCourse)

// allocate lecture
router.post('/allocate-lecture', adminController.allocateLecture)

module.exports = router;