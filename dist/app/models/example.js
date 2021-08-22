"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const baseModel_1 = __importDefault(require("./baseModel"));
const { Schema } = mongoose_1.default;
const ModelSchema = new Schema({
// name:String
}, {
    strict: false,
    versionKey: false
});
ModelSchema.plugin(baseModel_1.default);
exports.default = mongoose_1.default.model('Example', ModelSchema);
