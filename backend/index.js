require('dotenv').config()
const express = require('express')
const server = express()
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

server.use(
  cors({
    origin: '',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  }),
)

server.use(express.urlencoded({ extended: false }))

// Middleware
app.use(bodyParser.json())

// Routes

app.use('/auth', authRoutes)
app.use('/mentors', mentorRoutes)
app.use('/', (req,res)=> res.status(201).json({ message: 'server Connected' }))
// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
