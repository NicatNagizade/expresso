import fs from 'fs'
function readRecursive(dir: string) {
    const files: { prefix: string, path: string }[] = []
    const filenames = fs.readdirSync(dir)
    filenames.map((filename: string) => {
        const lastIndex = filename.lastIndexOf('.')
        if (lastIndex !== -1) {
            const prefix = filename.slice(0, filename.lastIndexOf('.'))
            files.push({ prefix: `/${prefix}`, path: dir + '/' + filename })
        } else {
            const recFiles = readRecursive(dir + '/' + filename)
            recFiles.map((f: { prefix: string, path: string }) => {
                files.push({ prefix: `/${filename}${f.prefix}`, path: f.path })
            })
        }
    })
    return files
}

export default readRecursive