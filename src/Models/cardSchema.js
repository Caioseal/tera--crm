import mongoose from "mongoose"

const cardSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        registerType: {
            type: String
        },
        cpf: {
            type: Number
        },
        fullName: {
            type: String
        },
        companyName: {
            type: String
        },
        phone: {
            type: Number
        },
        email: {
            type: String
        },
        product: {
            type: String
        },
        price: {
            type: Number
        },
        nextContact: {
            type: String
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
        }
    }
)

const cards = mongoose.model('cards', cardSchema)

export default cards