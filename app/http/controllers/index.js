const { db } = require("../../../loaders/mongoose")
const moment = require('moment')

class BaseController {
    constructor(req, res, next) {
        this.startTime = this.now()
        this.req = req
        this.res = res
        this.next = next
    }
    static service(fileName) {
        const Service = require('../../services/' + fileName)
        return new Service
    }
    static validator(fileName) {
        const Validator = require('../validators/' + fileName)
        return new Validator
    }
    currentTime() {
        return moment(this.now()).format('YYYY-MM-DD H:mm:ss')
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
    response({ status, data }) {
        this.res.status(status).json(data)
        this.logRequest({ status, data })
    }
    success(response) {
        this.response({ status: 200, data: response })
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
                    message: error.message,
                    errors: error.errors
                }
                break
            default:
                data = {
                    status: 500,
                    message: error.message || 'Something went wrong',
                    errors: {}
                }
                this.unexpectedError(error)
        }
        const { status, message, errors } = data
        this.response({ status: status, data: { message, errors } })
    }
    unexpectedError(error) {
        const data = {
            stack: error.stack,
            created_at: this.currentTime()
        }
        db.collection('unexpectedErrors').insertOne(data)
    }
    logRequest({ status, data }) {
        const { ip, method, originalUrl, query, body } = this.req
        const created_at = this.currentTime()
        const time = this.now() - this.startTime
        const response = (method == 'GET' && status < 300) ? null : data
        const log = {
            ip, method, endpoint: originalUrl,
            status, time, query, payload: body,
            response, created_at
        }
        db.collection('logRequests').insertOne(log)
    }
}

module.exports = BaseController