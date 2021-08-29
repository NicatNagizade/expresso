const config = process.env

export default {...config}

export function env(key:string, defaultValue: string = ''): string {
    return config[key] ?? defaultValue
}