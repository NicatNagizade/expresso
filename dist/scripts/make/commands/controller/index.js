"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const stubPath = path_1.default.join(__dirname, './controller.stub');
const commandPath = path_1.default.join(__dirname, '../../../../', 'app/http/controllers/');
const controller = (args) => {
    const firstParam = args[0];
    const dirPath = firstParam.split('/');
    const name = dirPath.pop();
    const readFile = fs_1.default.readFileSync(stubPath);
    const text = readFile.toString()
        .replace(/{Name}/g, name.capitalize())
        .replace(/{name}/g, name);
    if (dirPath.length > 0) {
        const exists = fs_1.default.existsSync(commandPath + dirPath.join('/'));
        if (!exists) {
            fs_1.default.mkdirSync(commandPath + dirPath.join('/'));
        }
    }
    const fullPath = commandPath + firstParam + '.ts';
    fs_1.default.writeFileSync(fullPath, text);
    console.log(fullPath + ' is created');
};
module.exports = controller;
