require('../../loaders')
import fs from 'fs'
import path from 'path'

const run = async () => {
    const commands: string[] = []
    process.argv.slice(2).forEach((val) => {
        commands.push(val)
    })
    if (commands.length < 2) {
        console.log('Needs at least 2 arguments')
        return
    }
    const [command, ...args] = commands
    if (command == 'full') {
        const fullCommands = ['route', 'controller', 'service', 'validator', 'model']
        fullCommands.forEach(c => {
            const commandPath = path.join(__dirname, 'commands', c)
            require(commandPath)(args)
        })
        return
    }
    const commandPath = path.join(__dirname, 'commands', command)
    if (fs.existsSync(commandPath)) {
        require(commandPath)(args)
        return
    }
    console.log('Command is not defined')
}

run()