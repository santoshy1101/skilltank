const User = require('../models/user')

// Function to handle user signup
exports.signup = async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, email, password, role } = req.body

    // Create a new user instance
    const user = new User({
      name,
      email,
      password,
      role,
    })

    // Save the user to the database
    await user.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
