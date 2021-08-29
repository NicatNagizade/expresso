import ResponseError from "./ResponseError"

export default class ValidatorError extends ResponseError{
    constructor(public message: string, public errors: {}) {
        super(message, errors)
        this.name = 'ValidatorError'
    }
}