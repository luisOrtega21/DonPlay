import UserModel from "../../Infrastructure/Mongoose/Models/User"
import type IUserService from "../Interfaces/IUserService"
import UserRepository from "../../Infrastructure/Mongoose/Repositories/UserRepository"

class UserService implements IUserService {
  userRepo: UserRepository
  constructor() {
    this.userRepo = new UserRepository()
  }

  async getUsersServ<UserModel>(): Promise<UserModel[]> {
    try {
      const users = await this.userRepo.getUsersRep()
      return users as UserModel[]
    } catch {
      throw new Error("Error in GetUsersService")
    }
  }

  async getUserByIdServ<UserModel>(id: string): Promise<UserModel> {
    try {
      if (id === null || id === "") throw new Error("The User-ID is required")
      const user = await this.userRepo.getUserByIdRep(id)
      return user as UserModel
    } catch {
      throw new Error("Error in GetUserByIdService")
    }
  }

  async getUserByEmailServ<UserModel>(email: string): Promise<UserModel> {
    try {
      if (email === null || email === "")
        throw new Error("The User-Email is required")
      const user = await this.userRepo.getUserByEmailRep(email)
      return user as UserModel
    } catch {
      throw new Error("Error in GetUserByEmailService")
    }
  }

  async createUserServ<UserModel>(user: UserModel): Promise<UserModel> {
    try {
      if (user === null) throw new Error("The User is required")

      const userModel = new UserModel(user)
      const userEmailExist = await this.userRepo.getUserByEmailRep(
        userModel.email
      )
      if (userEmailExist === true) throw new Error("The email already exists")
      const userSave = await this.userRepo.createUserRep(user)
      return userSave as UserModel
    } catch {
      throw new Error("Error in CreateUserService")
    }
  }

  async updateUserServ<UserModel>(
    id: string,
    user: UserModel
  ): Promise<UserModel> {
    try {
      if (id === null || id === "") throw new Error("The User-ID is required")
      if (user === null) throw new Error("The User is required")
      const userUpdate = await this.userRepo.updateUserRep(id, user)
      return userUpdate as UserModel
    } catch {
      throw new Error("Error in UpdateUserService")
    }
  }

  async deleteUserServ(id: string): Promise<string> {
    try {
      if (id === null || id === "") throw new Error("The User-ID is required")
      const userDelete = await this.userRepo.deleteUserRep(id)
      return userDelete
    } catch {
      throw new Error("Error in DeleteUserService")
    }
  }
}

export default UserService
