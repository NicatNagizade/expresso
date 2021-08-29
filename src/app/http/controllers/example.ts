import BaseController from '../../../lib/controller'
import ExampleService from '../../services/example'
import ExampleValidator from '../validators/example'

class ExampleController extends BaseController {
    protected readonly service = new ExampleService()
    protected readonly validator = new ExampleValidator()
    async index() {
        const { query } = this.req
        const response = await this.service.index(query)
        this.success(response)
    }
    async show() {
        const { params } = this.req
        const response = await this.service.show(params.id)
        this.success(response)
    }
    async store() {
        const { body } = this.req
        const validated = this.validator.store(body).validated()
        const response = await this.service.store(validated)
        this.success(response)
    }
    async update() {
        const { body, params } = this.req
        const validated = this.validator.update(body).validated()
        const response = await this.service.update(params.id, validated)
        this.success(response)
    }
    async destroy() {
        const { params } = this.req
        const response = await this.service.destroy(params.id)
        this.success(response)
    }

}

export default ExampleController