const APP_NAME = process.env.APP_NAME
const APP_ENV = process.env.APP_ENV
const APP_KEY = process.env.APP_KEY
const APP_DEBUG = process.env.APP_DEBUG
const APP_PORT = process.env.APP_PORT
const APP_URL = process.env.APP_URL
const APP_TIMEZONE = process.env.APP_TIMEZONE

const DB_CONNECTION = process.env.DB_CONNECTION
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_DATABASE = process.env.DB_DATABASE
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

export {
    APP_NAME, APP_ENV, APP_KEY, APP_DEBUG,
    APP_PORT, APP_URL, APP_TIMEZONE,

    DB_CONNECTION, DB_HOST, DB_PORT,
    DB_DATABASE, DB_USERNAME, DB_PASSWORD,
}