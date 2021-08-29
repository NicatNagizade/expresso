import mongoose from 'mongoose'
import BaseModel from '../../lib/app/model'
const { Schema } = mongoose

const ModelSchema = new Schema({
    // name:String
}, {
    strict: false,
    versionKey: false,
    timestamps: true
})
ModelSchema.plugin(BaseModel)
export const Example = mongoose.model('Example', ModelSchema)
