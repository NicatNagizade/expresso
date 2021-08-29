import CryptoJS from 'crypto-js';
import {env} from '../config';

const crypto = {
    bcrypt(str: string) {
        return CryptoJS.AES.encrypt(str, env('APP_KEY')).toString()
    },
    decrypt(str: string) {
        const bytes = CryptoJS.AES.decrypt(str, env('APP_KEY'));
        return bytes.toString(CryptoJS.enc.Utf8);
    },
    hashCheck(hashStr: string, str: string) {
        return crypto.decrypt(hashStr) === str
    }
}

export default crypto