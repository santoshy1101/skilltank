const express = require('express')
const router = express.Router()
const mentorController = require('../controllers/mentorController')

// GET request to retrieve all mentors
router.get('/mentors', mentorController.getAllMentors)

// POST request to add a new mentor
router.post('/add', mentorController.addMentor)

// GET request to retrieve a single mentor by ID
router.get('/:id', mentorController.getMentorById);

module.exports = router
