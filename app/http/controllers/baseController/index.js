const { db } = require('../../../../loaders/mongoose')
const time = require('../../../../utils/time')
const logRequest = require('./logRequest')
const logError = require('./logError')
const responseErrorData = require('./responseErrorData')

class BaseController {
    constructor(req, res, next) {
        this.startTime = time.now()
        this.req = req
        this.res = res
        this.next = next
        this.response = {
            status: 200,
            data: null
        }
        this.db = db
        this.time = time
    }
    static service(fileName) {
        return require('../../../services/' + fileName)
    }
    static validator(fileName) {
        return require('../../validators/' + fileName)
    }
    async method(m) {
        try {
            await this[m]()
            return this
        } catch (error) {
            this.error(error)
        }
    }
    resJson(data, status) {
        this.response = {data, status}
        this.res.status(status).json(data)
        logRequest(this)
    }
    success(data, status = 200) {
        this.resJson(data, status)
    }
    error(error) {
        const data = responseErrorData(error)
        if(data.status == 500) {
            logError(this, error)
        }
        const { status, message, errors } = data
        this.resJson({ message, errors }, status)
    }
}

module.exports = BaseController