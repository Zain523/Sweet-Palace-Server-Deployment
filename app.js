// Configuring env variables
require('dotenv').config()

// Importing npm packages
const express = require('express')
const cors = require('cors')

// Variables
const app = express()
const PORT = process.env.PORT

// Enabling cors policy
app.use(cors())

// Defining our routes
app.get('/', function (req, res) {
  res.send('Hello world')
})

// Listening our server 
app.listen(PORT, function () {
  console.log(`Server running on http://localhost:${PORT}`)
})