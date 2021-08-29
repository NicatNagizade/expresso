import { Router, RequestHandler } from 'express'

export class RouteClass {
    routes = Router()
    groupPrefix: string = ''
    groupMiddleware: any
    group({ prefix = '' }: { prefix: string }, callback: any) {
        const before = this.groupPrefix
        this.groupPrefix += this.trimSlashes(prefix)
        callback()
        this.groupPrefix = before
    }
    trimSlashes(str: string) {
        if (str.startsWith('/')) str = str.slice(1, str.length)
        if (str.endsWith('/')) str = str.slice(0, str.length - 1)
        return str
    }
    get(prefix: string = '', handler: RequestHandler | string) {
        this.callRoute('get', prefix, handler)
    }
    post(prefix: string = '', handler: RequestHandler | string) {
        this.callRoute('post', prefix, handler)
    }
    put(prefix: string = '', handler: RequestHandler | string) {
        this.callRoute('put', prefix, handler)
    }
    delete(prefix: string = '', handler: RequestHandler | string) {
        this.callRoute('delete', prefix, handler)
    }
    apiResource(prefix: string = '', controllerName: string) {
        this.get(prefix, controllerName + '.index')
        this.get(prefix + '/:id', controllerName + '.show')
        this.post(prefix, controllerName + '.store')
        this.put(prefix + '/:id', controllerName + '.update')
        this.delete(prefix + '/:id', controllerName + '.destroy')
    }
    callRoute(method: string, prefix: string, handler: RequestHandler | string) {
        const params: {
            prefix: string,
            handler: RequestHandler | string
        } = {
            prefix: '/' + 
            (this.groupPrefix ? this.groupPrefix + '/' : '')
                + this.trimSlashes(prefix),
            handler: ''
        }
        if (typeof handler === 'string') {
            const [conPath, methodName] = handler.split('.')
            const controller = require('../../app/http/controller/' + conPath)
            params.handler = (new controller)[methodName]
        } else {
            params.handler = handler
        }
        //@ts-ignore
        this.routes[method](params.prefix, params.handler)
    }
    readRoutes() {
        require('../../routes')
        return this.routes
    }
}

export const Route = new RouteClass
