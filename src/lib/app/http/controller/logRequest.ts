const logRequest = (controller: any) => {
    const { ip, method, originalUrl, query, body } = controller.req
    const {data, status} = controller.response
    const createdAt = controller.time.currentTime()
    const responseTime = controller.time.now() - controller.startTime
    const response = (method == 'GET' && status < 300) ? null : data
    const log = {
        ip, method, endpoint: originalUrl,
        status, time: responseTime, query, payload: body,
        response, createdAt
    }
    controller.db.collection('logRequests').insertOne(log)
}

export default logRequest