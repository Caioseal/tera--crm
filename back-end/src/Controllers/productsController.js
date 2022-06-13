import products from "../Models/productSchema.js"

class ProductController {
    
    static allProducts = (req, res) => {
        products.find()
        .exec((erro, products) => {
            if (erro) {
                res.status(400).send({message: `${erro.message}`})
            } else {
                res.status(200).json(products)
            }
        })
    }

    static showProductById = (req, res) => {
        const id = req.params.id
        products
        .findById(id)
        .exec((erro, products) => {
            if (erro) {
                res.status(400).send({ message: `${erro.message} - Id inválido` })
            } else {
                res.status(200).send(products)
            }
        })
    }

    static createProduct = (req, res) => {
        const product = new products(req.body)
        product.save((erro) => {
            if (erro) {
                res.status(500).send({message: `${erro.message}`})
            } else {
                res.status(201).send(product.toJSON())
            }
        })
    }

    static updateProduct = (req, res) => {
        const id = req.params.id
        console.log(id)
        products.findByIdAndUpdate(id, { $set: req.body }, (erro) => {
            if (erro) {
                res.status(500).send({ message: erro.message})
            } else {
                res.status(200).send({ message: "Produto atualizado com sucesso"})
            }
        })
    }

    static deleteProduct = (req, res) => {
        const id = req.params.id
        products.findByIdAndDelete(id, (erro) => {
            if (erro) {
                res.status(500).send({ message: erro.message})
            } else {
                res.status(200).send({message: "Produto excluído com sucesso"})
            }
        })
    }
}

export default ProductController