import columns from '../Models/columnSchema.js'

class ColumnsController {
    static getColumns = (req, res) => {
        columns.find()
        .populate('cardList')
            .exec((error, columns) => {
                if (error) {
                    res.status(400).send({ message: `${error.message}` })
                } else {
                    res.status(200).json(columns)
                }
            })
    }

    static getColumnById = (req, res) => {
        const id = req.params.id
        columns.findById(id)
            .exec((error, columns) => {
                if (error) {
                    res.status(400).send({ message: `${error.message} - Id inválido` })
                } else {
                    res.status(200).send(columns)
                }
            })
    }

    static createColumn = (req, res) => {
        const column = new columns(req.body)
        column.save((error) => {
            if (error) {
                res.status(500).send({ message: `${error.message}` })
            } else {
                res.status(201).send(column.toJSON())
            }
        })
    }

    static updateColumnbyId = (req, res) => {
        const id = req.params.id
        columns.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (error) {
                res.status(500).send({ message: erro.message })
            } else {
                res.status(200).send({ message: "Coluna atualizada com sucesso" })
            }
        })
    }

    static deleteColumn = (req, res) => {
        const id = req.params.id
        columns.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({ message: erro.message })
            } else {
                res.status(200).send({ message: "Coluna excluída com sucesso" })
            }
        })
    }
}

export default ColumnsController
