const express = require('express')
const dotenv = require('dotenv').config()
Port = process.env.PORT ||  5000

const app = express()

app.use('/' ,require('./routes/goalRoutes'))

app.listen(Port, ()=> console.log(`Server is running  port ${Port}`))