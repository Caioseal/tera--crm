import express from 'express'
import columnController from '../controllers/columnController.js'

const router = express.Router()

router
    .get("/getAllColumns", columnController.getColumns)
    .post("/createColumn", columnController.createColumn)
    .get("/getColumnById/:id", columnController.getColumnById)
    .patch("/updateColumnById/:id", columnController.updateColumnbyId)
    .delete("/deleteColumnById/:id", columnController.deleteColumn)

export default router