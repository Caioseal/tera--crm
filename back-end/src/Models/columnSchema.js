import mongoose from "mongoose"

const columnsSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,

        name: {
            type: String,
            default: 'Sem nome'
        },
        position: {
            type: Number
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

const Columns = mongoose.model("columns", columnsSchema)

export default Columns