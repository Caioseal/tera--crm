import express from "express"
import CardController from "../Controllers/cardsController.js"

const router = express.Router()

router
    .get("/cards", CardController.showAllCards)
    .post("/insert/:id", CardController.insertUser)
    .get("/card/:id", CardController.showCardById)
    .post("/newCardByColumnId/:id", CardController.createCardByColumnId)
    .put("/updateCard/:id", CardController.updateCardById)
    .delete("/deleteCard/:id", CardController.deleteCardById)

export default router
