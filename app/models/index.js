const BaseModel = function loadedAtPlugin(schema, options) {
    schema.query.paginate = async function (options = {}) {
        const { page = 1, perPage = 10 } = options
        const currentPage = parseInt(page)
        const c1 = Object.assign(Object.create(Object.getPrototypeOf(this)), this)
        const total = await c1.countDocuments()
        const data = await this.skip((page - 1) * perPage).limit(perPage)
        const dataCount = data.length
        return {
            currentPage,
            total,
            lastPage: Math.ceil(total/perPage),
            perPage,
            dataCount,
            data,
        }
    }
};

module.exports = BaseModel