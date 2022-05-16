import express from 'express'
import userController from "../Controllers/userController.js"
import authController from "../Controllers/authController.js"

const router = express.Router()

router
    .get("/all", userController.getAll)
    .post("/create", userController.createUser)
    .post("/login", authController.login)
    .get("/:id", userController.getUserById)
    .patch("/update/:id", userController.updateUserById)
    .delete("/delete/:id", userController.deleteUserById)

export default router

// authController.checkToken, 