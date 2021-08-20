const express = require('express')
const routes = express.Router()
const path = require('path')
const readRecursive = require('./readRecursive')
const routesPath = path.join(__dirname, '../../routes/')

const apiRoutes = () => {
    const filenames = readRecursive(routesPath + 'api')
    for (const file of filenames) {
        routes.use('/api' + file.prefix, require(file.path))
    }
}
apiRoutes()

module.exports = routes