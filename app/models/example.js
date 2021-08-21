const mongoose = require('mongoose')
const BaseModel = require('./baseModel')
const { Schema } = mongoose

const ModelSchema = Schema({
    // name:String
}, {
    strict: false,
    versionKey: false
})
ModelSchema.plugin(BaseModel)
module.exports = mongoose.model('Example', ModelSchema)
