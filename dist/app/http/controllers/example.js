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
const baseController_1 = __importDefault(require("./baseController"));
const ExampleService = baseController_1.default.service('example');
const ExampleValidator = baseController_1.default.validator('example');
class ExampleController extends baseController_1.default {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const { query } = this.req;
            const response = yield (new ExampleService).index(query);
            this.success(response);
        });
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = this.req;
            const response = yield (new ExampleService).show(params.id);
            this.success(response);
        });
    }
    store() {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = this.req;
            const validated = (new ExampleValidator).store(body).validated();
            const response = yield (new ExampleService).store(validated);
            this.success(response);
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params } = this.req;
            const validated = (new ExampleValidator).update(body).objectId(params.id).validated();
            const response = yield (new ExampleService).update(params.id, validated);
            this.success(response);
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = this.req;
            const response = yield (new ExampleService).destroy(params.id);
            this.success(response);
        });
    }
}
exports.default = ExampleController;
