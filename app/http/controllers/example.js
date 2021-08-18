const ExampleService = require('../../services/example')

const ExampleController = () => {
    return {
        async index(req, res) {
            const { query } = req
            const response = await ExampleService.index(query)
            res.status(200).json(response)
        },
        async show(req, res) {
            const { params } = req
            const response = await ExampleService.show(params.id)
            res.status(200).json(response)
        },
        async store(req, res) {
            const { body } = req
            const response = await ExampleService.store(body)
            res.status(200).json(response)
        },
        async update(req, res) {
            const { body, params } = req
            const response = await ExampleService.update(params.id, body)
            res.status(200).json(response)
        },
        async destroy(req, res) {
            const { params } = req
            const response = await ExampleService.destroy(params.id)
            res.status(200).json(response)
        }
    }
}

module.exports = ExampleController()