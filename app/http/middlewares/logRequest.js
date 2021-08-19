const moment = require('moment')
const { db } = require('../../../loaders/mongoose')

const logRequestMiddleware = async (req, res, next) => {
    const start = moment.now()
    let responseBody = null
    const json = res.json
    res.json = function (body) {
        responseBody = body
        json.call(this, body)
    }
    res.on('finish', function () {
        const { ip, method, originalUrl, query, body } = req
        const { statusCode } = this
        const created_at = moment(moment.now()).format('YYYY-MM-DD H:mm:ss')
        const time = moment.now() - start
        if(method == 'GET' && statusCode < 300) {
            responseBody = null
        }
        const data = {
            ip, method, originalUrl, query, body,
            statusCode, responseBody, time, created_at
        }
        db.collection('logRequests').insertOne(data)
    })
    next()
}

module.exports = logRequestMiddleware