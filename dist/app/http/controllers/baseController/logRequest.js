"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logRequest = (controller) => {
    const { ip, method, originalUrl, query, body } = controller.req;
    const { data, status } = controller.response;
    const created_at = controller.time.currentTime();
    const responseTime = controller.time.now() - controller.startTime;
    const response = (method == 'GET' && status < 300) ? null : data;
    const log = {
        ip, method, endpoint: originalUrl,
        status, time: responseTime, query, payload: body,
        response, created_at
    };
    controller.db.collection('logRequests').insertOne(log);
};
exports.default = logRequest;
