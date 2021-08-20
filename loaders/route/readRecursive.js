const fs = require('fs')
const readRecursive = (dir) => {
    const files = []
    const filenames = fs.readdirSync(dir)
    filenames.map(filename => {
        const lastIndex = filename.lastIndexOf('.')
        if (lastIndex !== -1) {
            const prefix = filename.slice(0, filename.lastIndexOf('.'))
            files.push({ prefix: `/${prefix}`, path: dir + '/' + filename })
        } else {
            const recFiles = readRecursive(dir + '/' + filename)
            recFiles.map(f => {
                files.push({ prefix: `/${filename}${f.prefix}`, path: f.path })
            })
        }
    })
    return files
}

module.exports = readRecursive