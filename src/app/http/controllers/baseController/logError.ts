import BaseController from "./"

const logError = (controller: BaseController, error: Error) => {
    const data = {
        stack: error.stack,
        createdAt: controller.time.currentTime()
    }
    controller.db.collection('logErrors').insertOne(data)
}

export default logError