require('../../loaders')
const fs = require('fs')
const path = require('path')

const run = async () => {
    const commands = []
    process.argv.slice(2).forEach((val) => {
        commands.push(val)
    })
    if (commands.length > 1) {
        const [command, ...args] = commands
        const commandPath = path.join(__dirname, 'commands', command, 'index.js')
        if(fs.existsSync(commandPath)) {
            require(commandPath)(args)
        }
        else {
            console.log('Command is not defined')
        }
    } else {
        console.log('Needs 2 arguments')
    }
}

run()