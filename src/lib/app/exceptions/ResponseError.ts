export interface IResponseError {
    name: string
    message: string
    stack?: string
    errors: {}
}

export default class ResponseError extends Error implements IResponseError{
    constructor(public message: string, public errors: {}) {
        super()
    }
}