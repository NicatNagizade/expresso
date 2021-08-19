const BaseController = require('./')
const ExampleService = require('../../services/example')
const ExampleValidator = require('../validation/example')
const service = new ExampleService()
const validator = new ExampleValidator()

class ExampleController extends BaseController {
    async index() {
        const { query } = this.req
        const response = await service.index(query)
        this.success(response)
    }
    async show() {
        const { params } = this.req
        const response = await service.show(params.id)
        this.success(response)
    }
    async store() {
        const { body } = this.req
        const validated = validator.store(body).validated()
        const response = await service.store(validated)
        this.success(response)
    }
    async update() {
        const { body, params } = this.req
        const validated = validator.update(body).validated()
        const response = await service.update(params.id, validated)
        this.success(response)
    }
    async destroy() {
        const { params } = this.req
        const response = await service.destroy(params.id)
        this.success(response)
    }

}

module.exports = ExampleController