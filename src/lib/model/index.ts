const BaseModel = function loadedAtPlugin(schema: any, options: any) {
    schema.query.paginate = async function ({ page = 1, perPage = 10 }: { page: any, perPage: any }): Promise<{
        currentPage: number,
        total: number,
        lastPage: number,
        perPage: number,
        dataCount: number,
        data: any,
    }> {
        const iPage: number = parseInt(page)
        const iPerPage: number = parseInt(perPage)
        const c1 = Object.assign(Object.create(Object.getPrototypeOf(this)), this)
        const total = await c1.countDocuments()
        const data = await this.skip((iPage - 1) * iPerPage).limit(iPerPage)
        const dataCount = data.length
        return {
            currentPage: iPage,
            total,
            lastPage: Math.ceil(total / iPerPage),
            perPage: iPerPage,
            dataCount,
            data,
        }
    }
};

export default BaseModel