const logError = (controller, error) => {
    const data = {
        stack: error.stack,
        created_at: controller.time.currentTime()
    }
    controller.db.collection('logErrors').insertOne(data)
}

module.exports = logError