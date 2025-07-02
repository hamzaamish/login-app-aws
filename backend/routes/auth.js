const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/auth')

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body
  const hashed = await bcrypt.hash(password, 10)
  try {
    const user = await User.create({ name, email, password: hashed })
    res.status(201).json({ message: 'User created' })
  } catch (err) {
    res.status(400).json({ error: 'Email already exists' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).send('Invalid email')

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(400).send('Invalid password')

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.cookie('token', token, { httpOnly: true }).send('Login success')
})

router.get('/dashboard', authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select('-password')
  res.json({ user })
})

module.exports = router

