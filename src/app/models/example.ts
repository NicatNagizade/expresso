import mongoose from 'mongoose'
import BaseModel from '../../lib/model'
const { Schema } = mongoose

const ModelSchema = new Schema({
    // name:String
}, {
    strict: false,
    versionKey: false,
    timestamps: true
})
ModelSchema.plugin(BaseModel)
export default mongoose.model('Example', ModelSchema)
