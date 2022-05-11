import express from "express"
import db from "./src/config/dbConnect.js"
import chalk from 'chalk'
import cards from "./src/Routes/cardsRoutes.js"
import cors from "cors"
import userRoutes from "./src/Routes/userRoutes.js"
import productsRoutes from "./src/Routes/productsRoutes.js"

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
        cards,
        userRoutes,
        productsRoutes
    )
}

routes(app)

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log(chalk.bgCyan(`    MongoDB Atlas conectado com sucesso
`))
})
