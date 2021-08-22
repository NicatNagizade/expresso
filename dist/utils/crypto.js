"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("crypto-js"));
const config_1 = require("../config");
const key = typeof (config_1.APP_KEY) !== 'string' ? '' : config_1.APP_KEY;
const crypto = {
    bcrypt(str) {
        return crypto_js_1.default.AES.encrypt(str, key);
    },
    decrypt(str) {
        const bytes = crypto_js_1.default.AES.decrypt(str, key);
        return bytes.toString(crypto_js_1.default.enc.Utf8);
    },
    hashCheck(hashStr, str) {
        return crypto.decrypt(hashStr) == str;
    }
};
exports.default = crypto;
