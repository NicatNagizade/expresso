import { Example } from "../models/example";

export class ExampleService {
    async index() {
        return await Example.find()
    }
}

export const exampleService = new ExampleService