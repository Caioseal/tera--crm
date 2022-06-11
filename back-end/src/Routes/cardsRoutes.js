import express from "express"
import CardController from "../Controllers/cardsController.js"

const router = express.Router()

router
    .get("/cards", CardController.listarCards)
    .post("/insert/:id", CardController.insertUser)
    .get("/cards/:id", CardController.listarCardsPorId)
    .post("/cards", CardController.createCard)
    .put("/cards/:id", CardController.updateCard)
    .delete("/cards/:id", CardController.deleteCard)
   

export default router

//6283e94eaa82d89731b7aa18 User example

//627d2fb5f67079be062f3f58 Card example