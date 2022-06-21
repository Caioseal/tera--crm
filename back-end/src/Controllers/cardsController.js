import cards from "../Models/cardSchema.js";
import columns from "../Models/columnSchema.js";

class CardController {
    static showAllCards = (req, res) => {
        cards.find()
            .exec((erro, cards) => {
                if (erro) {
                    res.status(400).send({ message: `${erro.message}` })
                } else {
                    res.status(200).json(cards)
                }
            })
    }

    static showCardById = (req, res) => {
        const id = req.params.id
        cards.findById(id)
            .exec((erro, cards) => {
                if (erro) {
                    res.status(400).send({ message: `${erro.message} - Id inválido` })
                } else {
                    res.status(200).send(cards)
                }
            })
    }

    static createCardByColumnId = (req, res) => {
        const card = new cards(req.body)
        card.save((erro) => {
            if (erro) {
                res.status(500).send({ message: `${erro.message}` })
            } else {
                res.status(201).send(card.toJSON())
                console.log(card._id)

                columns.findByIdAndUpdate(req.params.id, { $push: { cardList: card._id } }, (erro) => {
                    if (erro) {
                        res.status(500).send({ message: `${erro.message}` })
                    } 
                })
            }
        })
    }

    static updateCardById = (req, res) => {
        const id = req.params.id
        cards.findByIdAndUpdate(id, { $set: req.body }, (erro) => {
            if (erro) {
                res.status(500).send({ message: erro.message })
            } else {
                res.status(200).send({ message: "Card atualizado com sucesso" })
            }
        })
    }

    static deleteCardById = (req, res) => {
        const id = req.params.id
        cards.findByIdAndDelete(id, (erro) => {
            if (erro) {
                res.status(500).send({ message: erro.message })
            } else {
                res.status(200).send({ message: "Card excluído com sucesso" })
            }
        })
    }

    static insertUser = (req, res) => {
        cards.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { products: req.body.products } },
        )
            .exec((erro) => {
                if (erro) {
                    res.status(400).send({ message: `${erro.message}` })
                } else {
                    res.status(200).send({ message: "Card atualizado com sucesso" })
                }
            })
    }
}

export default CardController