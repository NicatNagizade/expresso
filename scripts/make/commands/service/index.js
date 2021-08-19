const fs = require('fs')
const path = require('path')
const stubPath = path.join(__dirname, './service.stub')

const service = (args) => {
    const [name] = args
    const readFile = fs.readFileSync(stubPath)
    const text = readFile.toString()
        .replace(/{Name}/g, name.capitalize())
        .replace(/{name}/g, name)

    const fullPath = path.join(__dirname, '../../../../', `app/services/${name}.js`)
    fs.writeFileSync(fullPath, text)
    console.log(fullPath + ' is created')
}

module.exports = service