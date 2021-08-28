import { db } from '../../loaders/mongoose'
import time from '../../utils/time'
import logRequest from './logRequest'
import logError from './logError'
import responseErrorData from './responseErrorData'
import { Request, Response, NextFunction } from 'express'

class BaseController {
    startTime: number
    response: { status: number, data: any }
    db: typeof db
    time: typeof time
    constructor(public req: Request, public res: Response, public next: NextFunction) {
        this.startTime = time.now()
        this.response = {
            status: 200,
            data: null
        }
        this.db = db
        this.time = time
    }
    async method(method: string) {
        try {
            // @ts-ignore
            await this[method]()
            return this
        } catch (error) {
            this.error(error)
        }
    }
    resJson(data: any, status: number) {
        this.response = { data, status }
        this.res.status(status).json(data)
        logRequest(this)
    }
    success(data: any, status = 200) {
        this.resJson(data, status)
    }
    error(error: any) {
        const data = responseErrorData(error)
        if (data.status == 500) {
            logError(this, error)
        }
        const { status, message, errors } = data
        this.resJson({ message, errors }, status)
    }
}

export default BaseController