import fs from 'fs'
import path from 'path'
const stubPath = path.join(__dirname, './controller.stub')
const commandPath = path.join(__dirname, '../../../../', 'app/http/controllers/')

const controller = (args: any) => {
    const firstParam = args[0]
    const dirPath = firstParam.split('/')
    const name = dirPath.pop()
    const readFile = fs.readFileSync(stubPath)
    const text = readFile.toString()
        .replace(/{Name}/g, name.capitalize())
        .replace(/{name}/g, name)

    if (dirPath.length > 0) {
        const exists = fs.existsSync(commandPath + dirPath.join('/'))
        if(!exists) {
            fs.mkdirSync(commandPath + dirPath.join('/'))
        }
    }
    const fullPath = commandPath + firstParam + '.ts'
    fs.writeFileSync(fullPath, text)
    console.log(fullPath + ' is created')
}

module.exports = controller