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
Object.defineProperty(exports, "__esModule", { value: true });
const BaseModel = function loadedAtPlugin(schema, options) {
    schema.query.paginate = function ({ page = 1, perPage = 10 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const iPage = parseInt(page);
            const iPerPage = parseInt(perPage);
            const c1 = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
            const total = yield c1.countDocuments();
            const data = yield this.skip((iPage - 1) * iPerPage).limit(iPerPage);
            const dataCount = data.length;
            return {
                currentPage: iPage,
                total,
                lastPage: Math.ceil(total / iPerPage),
                perPage: iPerPage,
                dataCount,
                data,
            };
        });
    };
};
exports.default = BaseModel;
