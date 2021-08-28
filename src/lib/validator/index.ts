import ValidatorError from "../../app/exceptions/ValidatorError"

import Validator from 'validatorjs'
import path from 'path'
import { isValidObjectId } from 'mongoose'
// Validator.useLang('az')
const validatorLang = require(path.join(__dirname, '../../resources/lang/az/validator'))

class BaseValidator {
    rules: {}
    data: {}
    errors: {}

    constructor() {
        this.rules = {}
        this.data = {}
        this.errors = {}
    }
    addErrors(errors: {}) {
        this.errors = { ...this.errors, ...errors }
    }
    objectId(id: string) {
        if (!isValidObjectId(id)) {
            this.addErrors({ '_id': ['_id is incorrect format'] })
        }
        return this
    }
    check() {
        if (Object.keys(this.errors).length !== 0) {
            throw new ValidatorError('The given data was invalid.', this.errors)
        }
    }
    validated() {
        const validator = new Validator(this.data, this.rules, validatorLang)
        if (validator.fails()) {
            this.addErrors(validator.errors.errors)
        }
        this.check()
        const dataKeys = Object.keys(this.data)
        const validated: any = {}
        for (let key of dataKeys) {
            if (key in this.rules) {
                const data: any = this.data
                validated[key] = data[key]
            }
        }
        return validated
    }
}

export default BaseValidator