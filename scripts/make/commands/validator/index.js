const fs = require('fs')
const path = require('path')
const stubPath = path.join(__dirname, './validator.stub')

const validator = (args) => {
    const [name] = args
    const readFile = fs.readFileSync(stubPath)
    const text = readFile.toString()
        .replace(/{Name}/g, name.capitalize())
        .replace(/{name}/g, name)

    const fullPath = path.join(__dirname, '../../../../', `app/http/validators/${name}.js`)
    fs.writeFileSync(fullPath, text)
    console.log(fullPath + ' is created')
}

module.exports = validator