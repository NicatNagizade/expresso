import {Request, Response, NextFunction} from 'express'
import {exampleService} from '../../services/ExampleService'

module.exports = class ExampleController {
    async index(req: Request, res: Response, next: NextFunction) {
        const response = await exampleService.index()
        res.json(response)
    }
    // show(req: Request, res: Response, next: NextFunction) {
    //     res.json({mes:"test show"})
    // }
    // store(req: Request, res: Response, next: NextFunction) {
    //     res.json({mes:"test store"})
    // }
    // update(req: Request, res: Response, next: NextFunction) {
    //     res.json({mes:"test update"})
    // }
    // destroy(req: Request, res: Response, next: NextFunction) {
    //     res.json({mes:"test destroy"})
    // }
}