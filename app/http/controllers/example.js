const BaseController = require('./')
const ExampleService = BaseController.service('example')
const ExampleValidator = BaseController.validator('example')

class ExampleController extends BaseController {
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
        const validated = ExampleValidator.store(body).validated()
        const response = await ExampleService.store(validated)
        this.success(response)
    }
    async update() {
        const { body, params } = this.req
        const validated = ExampleValidator.update(body).validated()
        const response = await ExampleService.update(params.id, validated)
        this.success(response)
    }
    async destroy() {
        const { params } = this.req
        const response = await ExampleService.destroy(params.id)
        this.success(response)
    }

}

module.exports = ExampleController