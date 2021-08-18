const path = require('path')

const file = () => {
    return {
        readDirRecursiveJsFiles(dir) {
            const files = []
            const filenames = fs.readdirSync(dir)
            filenames.map(filename => {
                const lastIndex = filename.lastIndexOf('.')
                if (lastIndex !== -1) {
                    const prefix = filename.slice(0, filename.lastIndexOf('.'))
                    files.push({ prefix: `/${prefix}`, path: path.join(dir, filename) })
                } else {
                    const recFiles = this.readDirRecursiveJsFiles(dir + '/' + filename)
                    recFiles.map(f => {
                        files.push({ prefix: `/${filename}${f.prefix}`, path: f.path })
                    })
                }
            })
            return files
        }
    }
}

module.exports = file()