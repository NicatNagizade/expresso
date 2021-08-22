"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseError_1 = __importDefault(require("./ResponseError"));
class ValidatorError extends ResponseError_1.default {
    constructor(message, errors) {
        super(message, errors);
        this.message = message;
        this.errors = errors;
        this.name = 'ValidatorError';
    }
}
exports.default = ValidatorError;
