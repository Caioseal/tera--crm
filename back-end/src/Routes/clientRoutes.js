import express from "express"
import ClientController from "../Controllers/clientController.js"

const router = express.Router()

router
    .get("/getAllClients", ClientController.showAllClients)
    .post("/createClient", ClientController.createClient)

export default router