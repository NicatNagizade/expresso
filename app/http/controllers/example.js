const ExampleService = require('../../services/example')
const Controller = require('./')
const service = new ExampleService()

class ExampleController extends Controller {
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
        const response = await service.store(body)
        this.success(response)
    }
    async update() {
        const { body, params } = this.req
        const response = await service.update(params.id, body)
        this.success(response)
    }
    async destroy() {
        const { params } = this.req
        const response = await service.destroy(params.id)
        this.success(response)
    }

}

module.exports = ExampleController