import express from "express"
import db from "./src/Config/dbConnect.js"
import cardsRoutes from "./src/Routes/cardsRoutes.js"
import cors from "cors"
import userRoutes from "./src/Routes/userRoutes.js"
import productsRoutes from "./src/Routes/productsRoutes.js"
import clientRoutes from "./src/Routes/clientRoutes.js"
import columnRoutes from "./src/Routes/columnRoutes.js"

const port = process.env.PORT || 3000
const app = express()

app.listen(port, () => {
    console.log('Servidor local criado com sucesso')
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
        clientRoutes,
        columnRoutes
    )
}

routes(app)

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log(`MongoDB Atlas conectado com sucesso
`)})
