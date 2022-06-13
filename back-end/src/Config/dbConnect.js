import mongoose from "mongoose"
import dotenv from "dotenv-safe"

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

let db = mongoose.connection

export default db