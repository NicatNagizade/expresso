import express from 'express'
const routes = express.Router()
import path from 'path'
import readRecursive from './readRecursive'
const routesPath = path.join(__dirname, '../../routes/')

const apiRoutes = () => {
    const filenames = readRecursive(routesPath + 'api')
    for (const file of filenames) {
        routes.use('/api' + file.prefix, require(file.path))
    }
}
apiRoutes()

export default routes