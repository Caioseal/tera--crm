import userSchema from '../models/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const SECRET = process.env.SECRET

class authController {

    static login = (req, res) => {
        userSchema.findOne({ email: req.body.email }, (error, user) => {
            if(!user) {
                return res.status(401).send({
                    message: "Usuário não encontrado",
                    email: `${req.body.email}`
                })
            }
            const validPassword = bcrypt.compareSync(req.body.password, user.password)
    
            if(!validPassword) {
              return res.status(401).send({
                  message: "Login não autorizado"
              })
            }
            
            const token = jwt.sign({ name: user.name }, SECRET)
            res.status(200).send({
                message: "Login autorizado",
                token
            })
        })
    }
}

export default authController