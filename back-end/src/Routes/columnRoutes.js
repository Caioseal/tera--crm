import express from 'express'
import columnController from '../Controllers/columnController.js'

const router = express.Router()

router
    .get("/getAllColumns", columnController.getColumns)
    .post("/createColumn", columnController.createColumn)
    .post("/moveCardtoAnotherColumn", columnController.moveCardtoAnotherColumn)
    .get("/getColumnById/:id", columnController.getColumnById)
    .patch("/updateColumnById/:id", columnController.updateColumnById)
    .delete("/deleteColumnById/:id", columnController.deleteColumn)

export default router