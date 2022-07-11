import Columns from '../Models/columnSchema.js'

class ColumnsController {
    static getColumns = (req, res) => {
        Columns.find()
            .populate('cardList')
            .exec((error, Columns) => {
                if (error) {
                    res.status(400).send({ message: `${error.message}` })
                } else {
                    res.status(200).json(Columns)
                }
            })
    }

    static getColumnById = (req, res) => {
        const id = req.params.id
        Columns.findById(id)
            .exec((error, column) => {
                if (error) {
                    res.status(400).send({ message: `${error.message} - Id inválido` })
                } else {
                    res.status(200).send(column)
                }
            })
    }

    static createColumn = (req, res) => {
        const column = new Columns(req.body)
        column.save((error) => {
            if (error) {
                res.status(500).send({ message: `${error.message}` })
            } else {
                res.status(201).send(column.toJSON())
            }
        })
    }

    static updateColumnById = (req, res) => {
        const id = req.params.id
        console.log(req.body)
        Columns.findByIdAndUpdate( id, { $set: req.body }, { new: true }, (error, column) => {
            if (error) {
                res.status(400).send({ message: `${error.message}` })
            } else {
                res.status(200).send(column)
            }
        }
        )
    }

    static deleteColumn = (req, res) => {
        const id = req.params.id
        Columns.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(200).send({ message: "Coluna excluída com sucesso" })

            }
        })
    }
}

export default ColumnsController
