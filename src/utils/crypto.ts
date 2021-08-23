import CryptoJS from 'crypto-js';
import {APP_KEY} from '../config';
const key: string = typeof(APP_KEY) !== 'string' ? '' : APP_KEY

const crypto = {
    bcrypt(str: string) {
        return CryptoJS.AES.encrypt(str, key).toString()
    },
    decrypt(str: string) {
        const bytes = CryptoJS.AES.decrypt(str, key);
        return bytes.toString(CryptoJS.enc.Utf8);
    },
    hashCheck(hashStr: string, str: string) {
        return crypto.decrypt(hashStr) === str
    }
}

export default crypto