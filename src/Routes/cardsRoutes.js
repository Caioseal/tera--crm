import express from "express"
import CardController from "../Controllers/cardsController.js"

const router = express.Router()

router
    .get("/cards", CardController.listarCards)
    .get("/cards/:id", CardController.listarCardsPorId)
    .post("/cards", CardController.createCard)
    .put("/cards/:id", CardController.updateCard)
    .delete("/cards/:id", CardController.deleteCard)

export default router
