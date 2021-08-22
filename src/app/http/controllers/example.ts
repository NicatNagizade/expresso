import BaseController from './baseController'
const ExampleService = BaseController.service('example')
const ExampleValidator = BaseController.validator('example')

class ExampleController extends BaseController {
    async index() {
        const { query } = this.req
        const response = await (new ExampleService).index(query)
        this.success(response)
    }
    async show() {
        const { params } = this.req
        const response = await (new ExampleService).show(params.id)
        this.success(response)
    }
    async store() {
        const { body } = this.req
        const validated = (new ExampleValidator).store(body).validated()
        const response = await (new ExampleService).store(validated)
        this.success(response)
    }
    async update() {
        const { body, params } = this.req
        const validated = (new ExampleValidator).update(body).objectId(params.id).validated()
        const response = await (new ExampleService).update(params.id, validated)
        this.success(response)
    }
    async destroy() {
        const { params } = this.req
        const response = await (new ExampleService).destroy(params.id)
        this.success(response)
    }

}

export default ExampleController