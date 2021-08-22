"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidatorError_1 = __importDefault(require("../../../exceptions/ValidatorError"));
const Validator = require('validatorjs');
const path = require('path');
const { isValidObjectId } = require('mongoose');
// Validator.useLang('az')
const validatorLang = require(path.join(__dirname, '../../../../resources/lang/az/validator'));
class BaseValidator {
    constructor() {
        this.rules = {};
        this.data = {};
        this.errors = {};
    }
    addErrors(errors) {
        this.errors = Object.assign(Object.assign({}, this.errors), errors);
    }
    objectId(id) {
        if (!isValidObjectId(id)) {
            this.addErrors({ '_id': ['_id is incorrect format'] });
        }
        return this;
    }
    check() {
        if (Object.keys(this.errors).length !== 0) {
            throw new ValidatorError_1.default('The given data was invalid.', this.errors);
        }
    }
    validated() {
        const validator = new Validator(this.data, this.rules, validatorLang);
        if (validator.fails()) {
            this.addErrors(validator.errors.errors);
        }
        this.check();
        const dataKeys = Object.keys(this.data);
        const validated = {};
        for (let key of dataKeys) {
            if (key in this.rules) {
                const data = this.data;
                validated[key] = data[key];
            }
        }
        return validated;
    }
}
module.exports = BaseValidator;
