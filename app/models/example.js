const mongoose = require('mongoose')
const BaseModel = require('./')
const { Schema } = mongoose

const ExampleSchema = Schema({
    // name:String
}, {
    strict: false,
    versionKey: false
})
ExampleSchema.plugin(BaseModel)
const Example = mongoose.model('Example', ExampleSchema)
module.exports = Example
