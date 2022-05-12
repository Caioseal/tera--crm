import express from "express"
import ClientController from "../Controllers/clientController.js"

const router = express.Router()

router
    .get("/clients", ClientController.showAllClients)
    .post("/clients", ClientController.createClient)

export default router