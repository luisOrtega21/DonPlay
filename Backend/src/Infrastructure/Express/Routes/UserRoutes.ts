import { Router } from "express"
import UserController from "../../../Controllers/UserController"
import { tokenValidation } from "../../../Common/ValidateToken"

const router = Router()
router.get("/user", UserController.getUsers)
router.get("/user/:id", UserController.getUserById)
router.post("/user", UserController.createUser)
router.post("/userLogin", UserController.SignIn)
router.put("/user/:id", UserController.updateUserById)
router.delete("/user/:id", UserController.deleteUserById)
router.get("/profile", tokenValidation, UserController.profile)

export default router
