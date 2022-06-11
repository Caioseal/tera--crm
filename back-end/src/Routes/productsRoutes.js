import express from "express"
import ProductController from "../Controllers/productsController.js"

const router = express.Router()

router
    .get("/getAllProducts", ProductController.allProducts)
    .get("/getProductById/:id", ProductController.showProductById)
    .post("/createProduct", ProductController.createProduct)
    .put("/updateProductById/:id", ProductController.updateProduct)
    .delete("/deleteProductById/:id", ProductController.deleteProduct)

export default router