import express from "express"
import ProductController from "../Controllers/productsController.js"

const router = express.Router()

router
    .get("/products", ProductController.allProducts)
    .get("/products/:id", ProductController.showProductById)
    .post("/products", ProductController.createProduct)
    .put("/products/:id", ProductController.updateProduct)
    .delete("/products/:id", ProductController.deleteProduct)

export default router