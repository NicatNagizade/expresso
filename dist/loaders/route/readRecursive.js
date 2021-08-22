"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function readRecursive(dir) {
    const files = [];
    const filenames = fs_1.default.readdirSync(dir);
    filenames.map((filename) => {
        const lastIndex = filename.lastIndexOf('.');
        if (lastIndex !== -1) {
            const prefix = filename.slice(0, filename.lastIndexOf('.'));
            files.push({ prefix: `/${prefix}`, path: dir + '/' + filename });
        }
        else {
            const recFiles = readRecursive(dir + '/' + filename);
            recFiles.map((f) => {
                files.push({ prefix: `/${filename}${f.prefix}`, path: f.path });
            });
        }
    });
    return files;
}
exports.default = readRecursive;
