const Example = require('../models/example')

const ExampleService = () => {
    return {
        async index(query = {}) {
            const { page, ...restQuery } = query
            const data = await Example.find(restQuery).paginate({ page })
            return data
        },
        async show(id) {
            const data = await Example.findById(id)
            return data
        },
        async store(body) {
            const data = await Example.create(body)
            return data
        },
        async update(id, body) {
            const data = await Example.findByIdAndUpdate(id, body, { new: true })
            return data
        },
        async destroy(id) {
            const data = await Example.findByIdAndDelete(id)
            return data
        }
    }
}
module.exports = ExampleService()