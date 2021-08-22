import express from 'express'
import cors from 'cors'
import './loaders'
import {APP_URL, APP_PORT} from './config/index'
import routes from './loaders/route'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')))
app.use(routes)

app.listen(APP_PORT, () => {
    console.log('App is running: ' + APP_URL)
})