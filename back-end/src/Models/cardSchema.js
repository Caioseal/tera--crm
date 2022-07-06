import mongoose from "mongoose"

const cardSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,

        //Customer
        registerType: {
            type: String
        },
        documentNumber: {
            type: Number
        },
        fullName: {
            type: String
        },
        companyName: {
            type: String
        },

        //Product
        productType: {
            type: String
        },
        priority: {
            type: String
        },
        productPrice: {
            type: Number,
            default: 0
        },
        
        //Card
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
        comment: {
            type: String
        }
    }
)

const cards = mongoose.model('cards', cardSchema)

export default cards