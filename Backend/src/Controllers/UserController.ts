import { type RequestHandler } from "express"
import UserModel, { type IUser } from "../Infrastructure/Mongoose/Models/User"
import UserService from "../Domain/services/UserService"
import jwt from "jsonwebtoken"

class UserController {
  userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  getUsers: RequestHandler = async (req, res) => {
    const users = await this.userService.getUsersServ()

    res.json(users)
  }

  getUserById: RequestHandler = async (req, res) => {
    const user = await this.userService.getUserByIdServ(req.params.id)

    res.json(user)
  }

  createUser: RequestHandler = async (req, res) => {
    const user: IUser = new UserModel()
    req.body.password = await user.encryptPassword(req.body.password)
    const response = await this.userService.createUserServ(req.body)
    // Token
    const token = jwt.sign({ _id: response._id }, "DonPlayJWT")

    res.header("auth-token", token).json(response)
  }

  SignIn: RequestHandler = async (req, res) => {
    let userExist = new UserModel()
    const user: IUser = new UserModel()

    userExist = await this.userService.getUserByEmailServ(req.body.email)
    const correctPassword = await user.validatePassword(
      req.body.password,
      userExist.password
    )

    if (correctPassword) {
      const token = jwt.sign({ _id: userExist.id }, "DonPlayJWT", {
        expiresIn: 60 * 60,
      })
      res.header("auth-token", token).json(`user authorized, ${token}`)
    }
  }

  updateUserById: RequestHandler = async (req, res) => {
    const userUpdated = await this.userService.updateUserServ(
      req.params.id,
      req.body
    )
    res.json(userUpdated)
  }

  deleteUserById: RequestHandler = async (req, res) => {
    const userDelete = await this.userService.deleteUserServ(req.params.id)

    res.json(userDelete)
  }

  profile: RequestHandler = async (req, res) => {
    res.json("profile12")
  }
}

export default new UserController()
