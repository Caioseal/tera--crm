import express from "express"
import db from "./back-end/src/config/dbConnect.js"
import chalk from 'chalk'
import cardsRoutes from "./back-end/src/Routes/cardsRoutes.js"
import cors from "cors"
import userRoutes from "./back-end/src/Routes/userRoutes.js"
import productsRoutes from "./back-end/src/Routes/productsRoutes.js"
import clientRoutes from "./back-end/src/Routes/clientRoutes.js"

const port = process.env.PORT || 3000
const app = express()

app.listen(port, () => {
    console.log(chalk.bgCyan(`
    Servidor local criado com sucesso em: http://localhost:${port}`))
})

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Conectado')
    })
    app.use(
        express.json(),
        cors(),
        cardsRoutes,
        userRoutes,
        productsRoutes,
        clientRoutes
    )
}

routes(app)

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log(chalk.bgCyan(`    MongoDB Atlas conectado com sucesso
`))
})
