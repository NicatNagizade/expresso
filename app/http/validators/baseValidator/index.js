const Validator = require('validatorjs')
const path = require('path')
const { isValidObjectId } = require('mongoose')
// Validator.useLang('az')
const validatorLang = require(path.join(__dirname, '../../../../resources/lang/az/validator'))

class BaseValidator {
    constructor() {
        this.rules = {}
        this.data = {}
        this.errors = null
    }
    addErrors(errors) {
        this.errors = {...this.errors, ...errors}
    }
    objectId(id) {
        if(!isValidObjectId(id)) {
            this.addErrors({'_id': ['_id is incorrect format']})
        }
        return this
    }
    check() {
        if (this.errors !== null) {
            const error = new Error()
            error.name = 'ValidatorError'
            error.message = 'The given data was invalid.'
            error.errors =this.errors
            throw error
        }
    }
    validated() {
        const validator = new Validator(this.data, this.rules, validatorLang)
        if (validator.fails()) {
            this.addErrors(validator.errors.errors)
        }
        this.check()
        const dataKeys = Object.keys(this.data)
        const validated = {}
        for (let key of dataKeys) {
            if (this.rules[key] !== undefined) {
                validated[key] = this.data[key]
            }
        }
        return validated
    }
}

module.exports = BaseValidator