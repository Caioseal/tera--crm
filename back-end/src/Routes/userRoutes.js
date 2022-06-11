import express from 'express'
import userController from "../Controllers/userController.js"
import authController from "../Controllers/authController.js"

const router = express.Router()

router
    .get("/getAllUsers", userController.getAll)
    .post("/createUser", userController.createUser)
    .post("/login", authController.login)
    .get("getUserById/:id", userController.getUserById)
    .patch("/updateUserById/:id", userController.updateUserById)
    .delete("/deleteUserById/:id", userController.deleteUserById)

export default router

// authController.checkToken, 
