const User = require('../models/user')
const jwt = require('jsonwebtoken') // Import JWT library

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

// Function to handle user login and return a token
exports.login = async (req, res) => {
  try {
    // Extract user login data from the request body
    const { email, password } = req.body

    // Check if the user exists in the database
    const user = await User.findOne({ email })

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Check if the provided password matches the user's password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Generate a JWT token with the user's data
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY, // Replace with your own secret key
      { expiresIn: '1h' }, // Token expiration time (e.g., 1 hour)
    )

    // Return the token to the client
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
