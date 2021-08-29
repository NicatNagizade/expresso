import mongoose from 'mongoose'
import { env } from '../config'

const usernameAndPassword = env('DB_USERNAME')  ? `${env('DB_USERNAME')}:${env('DB_PASSWORD')}@` : ''

const mongoServer = `${env('DB_CONNECTION')}://${usernameAndPassword}${env('DB_HOST')}:${env('DB_PORT')}/${env('DB_DATABASE')}`
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
mongoose.connect(mongoServer, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

export {mongoose, db}