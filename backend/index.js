require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./Routes/authRoutes') // Update the path
const mentorRoutes = require('./Routes/mentorRoutes') // Update the path
const app = express()
const cors = require('cors')

// Connect to MongoDB (make sure MongoDB is running)
main()
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_URL)
}

const corsOptions = {
  origin: '/' , // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}

app.use(cors(corsOptions))

app.options('*', cors(corsOptions)) // Enable preflight requests for all routes

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// Middleware
app.use(bodyParser.json())

// Routes

app.use('/auth', authRoutes)
app.use('/mentors', mentorRoutes)

// Root route handler
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server connected' })
})
// Start the server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
