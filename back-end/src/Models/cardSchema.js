import mongoose from "mongoose"

const cardSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        customer: {
            type: mongoose.Schema.Types.ObjectId, ref: 'clients'
        },
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: 'products'
        },
        nextContact: {
            type: Date, 
            default: new Date()
        },
        preferedContact: {
            type: String
        },
        action: {
            type: String
        },
        priority: {
            type: String
        },
        comment: {
            type: String
        },
        products: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'products'
        }]
    }
)

const cards = mongoose.model('cards', cardSchema)

export default cards