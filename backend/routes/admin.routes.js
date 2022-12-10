const express = require('express')
const router = express.Router();

// import admin controller
const adminController = require('../controller/admin.controller')

// test route
router.get('/', (req, res) => {
    console.log("Admin Testing");
})

router.get('/test', adminController.test)

module.exports = router;