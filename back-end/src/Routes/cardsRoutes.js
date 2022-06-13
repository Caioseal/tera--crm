import express from "express"
import CardController from "../Controllers/cardsController.js"

const router = express.Router()

router
    .get("/getCards", CardController.listarCards)
    .post("/insert/:id", CardController.insertUser)
    .get("/getCardbyId/:id", CardController.listarCardsPorId)
    .post("/createCard", CardController.createCard)
    .put("/updateCard/:id", CardController.updateCard)
    .delete("/deleteCard/:id", CardController.deleteCard)
   

export default router

//6283e94eaa82d89731b7aa18 User example

//627d2fb5f67079be062f3f58 Card example