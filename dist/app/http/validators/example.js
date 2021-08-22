"use strict";
const BaseValidator = require('./baseValidator');
class ExampleValidator extends BaseValidator {
    store(data) {
        this.data = data;
        this.rules = {
            name: 'required|string'
        };
        return this;
    }
    update(data) {
        this.data = data;
        this.rules = {
            name: 'sometimes|required|string'
        };
        return this;
    }
}
module.exports = ExampleValidator;
