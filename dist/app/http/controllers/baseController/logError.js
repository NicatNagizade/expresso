"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logError = (controller, error) => {
    const data = {
        stack: error.stack,
        created_at: controller.time.currentTime()
    };
    controller.db.collection('logErrors').insertOne(data);
};
exports.default = logError;
