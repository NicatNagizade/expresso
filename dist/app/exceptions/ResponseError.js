"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseError extends Error {
    constructor(message, errors) {
        super();
        this.message = message;
        this.errors = errors;
    }
}
exports.default = ResponseError;
