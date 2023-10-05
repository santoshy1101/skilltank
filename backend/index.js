require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./Routes/authRoutes') // Update the path
const mentorRoutes = require('./Routes/mentorRoutes') // Update the path
const app = express();
const cors = require('cors')


// Connect to MongoDB (make sure MongoDB is running)

main()
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_URL)

}

app.use(
  cors({
    origin: '/',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  }),
)


// Middleware
app.use(bodyParser.json())

// Routes

app.use('/auth', authRoutes)
app.use('/mentors', mentorRoutes)

// Root route handler
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server connected' });
});
// Start the server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
