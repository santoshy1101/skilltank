const Mentor = require('../models/Mentor')

// Function to get all mentors
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find()
    res.status(200).json(mentors)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Function to add a new mentor
exports.addMentor = async (req, res) => {
  try {
    // Extract mentor data from the request body
    const { image, name, experience } = req.body

    // Create a new mentor instance
    const mentor = new Mentor({
      image,
      name,
      experience,
    })

    // Save the mentor to the database
    await mentor.save()

    res.status(201).json({ message: 'Mentor added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Function to get a single mentor by ID
exports.getMentorById = async (req, res) => {
  try {
    const mentorId = req.params.id;

    // Retrieve the mentor from the database by ID
    const mentor = await Mentor.findById(mentorId);

    // Check if the mentor exists
    if (!mentor) {
      return res.status(404).json({ error: 'Mentor not found' });
    }

    // If found, send the mentor data as the response
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};




