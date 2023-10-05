const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

// POST request to register a new user
router.post('/signup', authController.signup)

// GET request to retrieve all user details
router.get('/users', authController.getAllUsers)

module.exports = router
