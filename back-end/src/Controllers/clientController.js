import clients from "../Models/clientSchema.js"

class ClientController {
    static showAllClients = (req, res) => {
        clients.find()
        .exec((erro, clients) => {
            if(erro) {
                res.status(400).send({message: `${erro.message}`})
            } else {
                res.status(200).json(clients)
            }
        })
    }

    static createClient = (req, res) => {
        const client = new clients(req.body)
        console.log(client)
        client.save((erro) => {
            if (erro) {
                res.status(500).send({message: `${erro.message}`})
            } else {
                res.status(201).send(client.toJSON())
            }
        })
    }
}

export default ClientController