"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./loaders");
const index_1 = require("./config/index");
const route_1 = __importDefault(require("./loaders/route"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(route_1.default);
app.listen(index_1.APP_PORT, () => {
    console.log('App is running: ' + index_1.APP_URL);
});
