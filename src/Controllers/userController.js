import userSchema from "../models/userSchema.js"
import bcrypt from "bcrypt"

class UserController {

    static getAll = async (req, res) => {
        userSchema.find(function (err, users) {
            if (err) {
                res.status(500).send({ message: err.message })
            }
            res.status(200).send(users)
        })
    }
    
    static createUser = async (req, res) => {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10) //password é a chave que vem no body...
        req.body.password = hashedPassword
        const newUser = new userSchema(req.body) //Criar um novo usuário com base no esquema do Mongoose com base no que vem pelo body da requisição
    
        try {
        const savedUser = await newUser.save()
        res.status(200).send({
            "message": "Usuário adicionado com sucesso", savedUser
        })
    
        } catch (erro) {
            res.status(500).send({
                message: erro
            })
        }
    }
}

export default UserController
