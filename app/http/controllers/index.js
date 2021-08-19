const { db } = require("../../../loaders/mongoose")
const moment = require('moment')

class Controller {
    constructor(req, res, next) {
        this.startTime = this.now()
        this.req = req
        this.res = res
        this.next = next
    }
    currentTime() {
        return moment(moment.now()).format('YYYY-MM-DD H:mm:ss') 
    }
    now() {
        return moment.now()
    }
    async method(m) {
        try {
            await this[m]()
            return this
        } catch (error) {
            this.error(error)
        }
    }
    response({status, data}) {
        this.res.status(status).json(data)
        this.logRequest({status, data})
    }
    success(response) {
        this.response({status: 200, data: response})
    }
    error(error) {
        const { name } = error
        let data = {}
        switch (name) {
            case 'CastError':
                data = {
                    status: 422,
                    message: error.message,
                    errors: {}
                }
                break
            case 'ValidatorError':
                data = {
                    status: 422,
                    message: 'The given data was invalid.',
                    errors: errors
                }
                break
            default:
                data = {
                    status: 500,
                    message: error.message || 'Something went wrong',
                    errors: {}
                }
                this.unexpectedErrors(error)
        }
        const { status, message, errors } = data
        this.response({status: status, data: {message, errors}})
    }
    unexpectedErrors(error) {
        const data = {
            stack: error.stack,
            created_at: this.currentTime()
        }
        db.collection('unexpectedErrors').insertOne(data)
    }
    logRequest({status, data}) {
        let responseBody = null
        const { ip, method, originalUrl, query, body } = this.req
        const created_at = this.currentTime()
        const time = this.now() - this.startTime
        if(method == 'GET' && status < 300) {
            responseBody = null
        } else {
            responseBody = data
        }
        const log = {
            ip, method, originalUrl, query, body,
            status, responseBody, time, created_at
        }
        db.collection('logRequests').insertOne(log)
    }
}

module.exports = Controller