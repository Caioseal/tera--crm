import userSchema from "../Models/userSchema.js"
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

    static getUserById = async(req, res) => {
        try {
            const userFound = await userSchema.findById(req.params.id)
            if (userFound) {
                res.status(200).json({
                    message: `O usuário ${userFound.name} não foi encontrado`, userFound
                })
            }
        } catch (erro) {
            res.status(500).json({
                message: `Não foi possível encontrar esse usuário. Por favor, verifique se digitou um id válido ou tente novamente ${erro.message}`
            })
        }
    }
    
    static createUser = async (req, res) => {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10) //password é a chave que vem no body...
        req.body.password = hashedPassword
        const newUser = new userSchema(req.body)
    
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

    static updateUserById = async (req, res) => {
        try {
            const userFound = await userSchema.findById(req.params.id)

            if(userFound) {
                userFound.name = req.body.name || userFound.name
                userFound.email = req.body.email || userFound.email
            }

            const savedUser = await userFound.save()

            res.status(200).json({
                message: "Usuário atualizado com sucesso", savedUser
            })
        } catch (erro) {
            console.error(erro)
        }
    }

    static deleteUserById = async (req, res) => {
        try {
            const userFound = await userSchema.findById(req.params.id)

            await userFound.delete()

            res.status(200).json({
                message: `Usuário ${userFound.email} deletado com sucesso`
            })
        } catch (erro) {
            res.status(400).json({
                message: erro.message
            })
        }
    }
}

export default UserController
