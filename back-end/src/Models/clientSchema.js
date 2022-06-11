import mongoose from "mongoose"

const clientSchema = new mongoose.Schema (
    {
        id: mongoose.Schema.Types.ObjectId,
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
        phone: {
            type: Number
        },
        email: {
            type: String
        },
    }
)

const clients = mongoose.model('clients', clientSchema)

export default clients

//Front - Nome completo, empresa, telefone e e-mail