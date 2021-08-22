import mongoose from 'mongoose'
import BaseModel from './baseModel'
const { Schema } = mongoose

const ModelSchema = new Schema({
    // name:String
}, {
    strict: false,
    versionKey: false
})
ModelSchema.plugin(BaseModel)
export default mongoose.model('Example', ModelSchema)
