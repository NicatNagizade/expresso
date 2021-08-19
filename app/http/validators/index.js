const Validator = require('validatorjs')
const path = require('path')
// Validator.useLang('az')
const validatorLang = require(path.join(__dirname, '../../../resources/lang/az/validator'))

class BaseValidator {
    constructor() {
        this.rules = {}
        this.data = {}
    }
    check() {
        const validator = new Validator(this.data, this.rules, validatorLang)
        if (validator.fails()) {
            const error = new Error()
            error.name = 'ValidatorError'
            error.message = 'The given data was invalid.'
            error.errors = validator.errors.errors
            throw error
        }
    }
    validated() {
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