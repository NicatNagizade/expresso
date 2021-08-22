"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const example_1 = __importDefault(require("../../app/http/controllers/example"));
router.get('/', (req, res, next) => {
    new example_1.default(req, res, next).method('index');
});
router.post('/', (req, res, next) => {
    new example_1.default(req, res, next).method('store');
});
router.get('/:id', (req, res, next) => {
    new example_1.default(req, res, next).method('show');
});
router.put('/:id', (req, res, next) => {
    new example_1.default(req, res, next).method('update');
});
router.delete('/:id', (req, res, next) => {
    new example_1.default(req, res, next).method('destroy');
});
module.exports = router;
