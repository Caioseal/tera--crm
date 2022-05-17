import cards from "../Models/cardSchema.js";

class CardController {
    static listarCards = (req, res) => {
        cards.find()
            .populate('customer')
            .populate('product')
            .exec((erro, cards) => {
                if (erro) {
                    res.status(400).send({ message: `${erro.message}` })
                } else {
                    res.status(200).json(cards)
                }
            })
    }

    static listarCardsPorId = (req, res) => {
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

    static createCard = (req, res) => {
        const card = new cards(req.body)
        card.save((erro) => {
            if (erro) {
                res.status(500).send({ message: `${erro.message}` })
            } else {
                res.status(201).send(card.toJSON())
            }
        })
    }

    static updateCard = (req, res) => {
        const id = req.params.id
        cards.findByIdAndUpdate(id, { $set: req.body }, (erro) => {
            if (erro) {
                res.status(500).send({ message: erro.message })
            } else {
                res.status(200).send({ message: "Card atualizado com sucesso" })
            }
        })
    }

    static deleteCard = (req, res) => {
        const id = req.params.id
        cards.findByIdAndDelete(id, (erro) => {
            if (erro) {
                res.status(500).send({ message: erro.message })
            } else {
                res.status(200).send({ message: "Card excluído com sucesso" })
            }
        })
    }
}

export default CardController