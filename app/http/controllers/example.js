const ExampleService = require('../../services/example')
const Controller = require('./')

class ExampleController extends Controller {
    constructor(...params) {
        super(...params)
    }
    async index() {
        const { query } = this.req
        const response = await ExampleService.index(query)
        this.success(response)
    }
    async show() {
        const { params } = this.req
        const response = await ExampleService.show(params.id)
        this.success(response)
    }
    async store() {
        const { body } = this.req
        const response = await ExampleService.store(body)
        this.success(response)
    }
    async update() {
        const { body, params } = this.req
        const response = await ExampleService.update(params.id, body)
        this.success(response)
    }
    async destroy() {
        const { params } = this.req
        const response = await ExampleService.destroy(params.id)
        this.success(response)
    }

}

module.exports = ExampleController