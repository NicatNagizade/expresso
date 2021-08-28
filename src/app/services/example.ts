import Example from '../models/example'

class ExampleService {
    async index(query = {}) {
        const { page, ...restQuery }: any = query
        const data = await Example.find(restQuery).paginate({ page })
        return data
    }
    async show(id: any) {
        const data = await Example.findById(id)
        return data
    }
    async store(body: {}) {
        const data = await Example.create(body)
        return data
    }
    async update(id: any, body: {}) {
        const data = await Example.findByIdAndUpdate(id, body, { new: true })
        return data
    }
    async destroy(id: any) {
        const data = await Example.findByIdAndDelete(id)
        return data
    }
}

export default ExampleService