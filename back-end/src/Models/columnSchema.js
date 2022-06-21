import mongoose from "mongoose"

const columnsSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,

        name: {
            type: String,
            required: true,
            default: 'Sem nome'
        },
        columnTotal: {
            type: Number,
            default: 0
        },
        cardList: {
            type: [mongoose.Schema.Types.ObjectId], ref: "cards"
        },
        createAt: {
            type: Date,
            default: new Date()
        }
    }
)

const columns = mongoose.model("columns", columnsSchema)

export default columns