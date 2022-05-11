import express from 'express'
import userController from "../Controllers/userController.js"
import authController from "../Controllers/authController.js"

const router = express.Router()

router
    .get("/all", userController.getAll)
    .post("/create", userController.createUser)
    .post("/login", authController.login)

export default router
