const BaseController = require('./')
const Service = BaseController.service('example')
const Validator = BaseController.validator('example')

class ExampleController extends BaseController {
    async index() {
        const { query } = this.req
        const response = await Service.index(query)
        this.success(response)
    }
    async show() {
        const { params } = this.req
        const response = await Service.show(params.id)
        this.success(response)
    }
    async store() {
        const { body } = this.req
        const validated = Validator.store(body).validated()
        const response = await Service.store(validated)
        this.success(response)
    }
    async update() {
        const { body, params } = this.req
        const validated = Validator.update(body).validated()
        const response = await Service.update(params.id, validated)
        this.success(response)
    }
    async destroy() {
        const { params } = this.req
        const response = await Service.destroy(params.id)
        this.success(response)
    }

}

module.exports = ExampleController