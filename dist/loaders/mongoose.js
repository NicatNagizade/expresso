"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.mongoose = void 0;
const mongoose = require('mongoose');
exports.mongoose = mongoose;
const { DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = require('../config');
const usernameAndPassword = DB_USERNAME ? `${DB_USERNAME}:${DB_PASSWORD}@` : '';
const mongoServer = `${DB_CONNECTION}://${usernameAndPassword}${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(mongoServer, options);
const db = mongoose.connection;
exports.db = db;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});
