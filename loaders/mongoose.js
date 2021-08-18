const mongoose = require('mongoose')
const { DB_CONNECTION, DB_HOST, DB_PORT,
    DB_DATABASE, DB_USERNAME, DB_PASSWORD } = require('../config')

const usernameAndPassword = DB_USERNAME ? `${DB_USERNAME}:${DB_PASSWORD}@` : ''

const mongoServer = `${DB_CONNECTION}://${usernameAndPassword}${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
mongoose.connect(mongoServer, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});

module.exports = mongoose