"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const path_1 = __importDefault(require("path"));
const readRecursive_1 = __importDefault(require("./readRecursive"));
const routesPath = path_1.default.join(__dirname, '../../routes/');
const apiRoutes = () => {
    const filenames = readRecursive_1.default(routesPath + 'api');
    for (const file of filenames) {
        routes.use('/api' + file.prefix, require(file.path));
    }
};
apiRoutes();
exports.default = routes;
