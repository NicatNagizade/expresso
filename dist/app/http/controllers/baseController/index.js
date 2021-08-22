"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../../../../loaders/mongoose");
const time_1 = __importDefault(require("../../../../utils/time"));
const logRequest_1 = __importDefault(require("./logRequest"));
const logError_1 = __importDefault(require("./logError"));
const responseErrorData_1 = __importDefault(require("./responseErrorData"));
class BaseController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.startTime = time_1.default.now();
        this.response = {
            status: 200,
            data: null
        };
        this.db = mongoose_1.db;
        this.time = time_1.default;
    }
    static service(fileName) {
        return require('../../../services/' + fileName);
    }
    static validator(fileName) {
        return require('../../validators/' + fileName);
    }
    method(method) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const thisClass = this;
                yield thisClass[method]();
                return this;
            }
            catch (error) {
                this.error(error);
            }
        });
    }
    resJson(data, status) {
        this.response = { data, status };
        this.res.status(status).json(data);
        logRequest_1.default(this);
    }
    success(data, status = 200) {
        this.resJson(data, status);
    }
    error(error) {
        const data = responseErrorData_1.default(error);
        if (data.status == 500) {
            logError_1.default(this, error);
        }
        const { status, message, errors } = data;
        this.resJson({ message, errors }, status);
    }
}
exports.default = BaseController;
