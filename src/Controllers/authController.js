import userSchema from '../models/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const SECRET = "JEELp6e+7Q6DyM0/1huE7Y5/EMrZvyvqC/9u2YIt1RtE1m/Go5vXvpBAKQw2L2BrX28uOTiGjHMhxx9R3sMBNeLxhDJtfY8zCO8NvDvvZExODk5qDwg43A1KwESHejDhBAnLOwjTv00UqpQwI/7FrzTats3Cqf6cyiiRlkE6JrM="

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