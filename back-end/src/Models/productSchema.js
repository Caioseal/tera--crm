import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        productType: {
            type: String
        },
        productName: {
            type: String
        },
        productDestination: {
            type: String
        },
        productDescription: {
            type: String
        },
        productPrice: {
            type: Number
        }
    }
)

const products = mongoose.model('products', productSchema)

export default products
