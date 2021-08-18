require('./loaders')
require('./loaders/mongoose')
const { APP_PORT, APP_URL } = require('./config')
const express = require('express')
const cors = require('cors')
const routes = require('./loaders/route')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use(routes)

app.listen(APP_PORT, () => {
    console.log('App is running: ' + APP_URL)
})