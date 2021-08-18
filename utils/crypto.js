const CryptoJS = require('crypto-js')
const { APP_KEY } = require('../config')

const crypto = () => {
    return {
        bcrypt(str) {
            return CryptoJS.AES.encrypt(str, APP_KEY)
        },
        decrypt(str) {
            const bytes = CryptoJS.AES.decrypt(str, APP_KEY);
            return bytes.toString(CryptoJS.enc.Utf8);
        },
        hashCheck(hashStr, str) {
            return this.decrypt(hashStr) == str
        }
    }
}

module.exports = crypto()