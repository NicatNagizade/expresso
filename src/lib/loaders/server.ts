import express from 'express'
import cors from 'cors'
import '.'
import './mongoose'
import path from 'path'
import { Route } from '../route'
import { env } from '../config'
const app = express()

export function createServer() {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static(path.join(__dirname, '../../../../public')))
}

export function createRoutes() {
    app.use(Route.readRoutes())
}

export function listen() {
    app.listen(env('APP_PORT'), () => {
        console.log('App is running: ' + env('APP_URL'))
    })
}


export default {
    app,
    createServer,
    createRoutes,
    listen,
}
