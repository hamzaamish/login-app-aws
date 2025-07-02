const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

// ✅ Add this root route for basic testing
app.get('/', (req, res) => {
  res.send('🌍 Earthora Backend is live!');
})

const authRoutes = require('./routes/auth')
app.use('/', authRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'))
  })
  .catch(err => console.error('❌ MongoDB error:', err))

