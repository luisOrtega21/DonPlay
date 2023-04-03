import UserModel from "../../../Infrastructure/Mongoose/Models/User"
import type IUserRepository from "../Interfaces/IUserRepository"

class UserRepository implements IUserRepository {
  async getUsersRep<UserModel>(): Promise<UserModel[]> {
    try {
      const users = await UserModel.find()
      return users as UserModel[]
    } catch {
      throw new Error("error getting DB users")
    }
  }

  async getUserByIdRep<UserModel>(id: string): Promise<UserModel> {
    try {
      const user = await UserModel.findById({ _id: id })
      return user as UserModel
    } catch {
      throw new Error(`error getting user with id ${id}`)
    }
  }

  async getUserByEmailRep<UserModel>(email: string): Promise<UserModel> {
    try {
      const user = await UserModel.findOne({ email })
      return user as UserModel
    } catch {
      throw new Error(`error getting user with email ${email}`)
    }
  }

  async createUserRep<UserModel>(user: UserModel): Promise<UserModel> {
    try {
      const userSave = new UserModel(user)
      await userSave.save()
      return userSave as UserModel
    } catch {
      throw new Error("error saving user in DB")
    }
  }

  async updateUserRep<UserModel>(
    id: string,
    user: UserModel
  ): Promise<UserModel> {
    try {
      const userUpdate = new UserModel(user)
      await UserModel.findByIdAndUpdate({ _id: id }, userUpdate, { new: true })
      return userUpdate as UserModel
    } catch {
      throw new Error(`error updating user with id ${id} in BD`)
    }
  }

  async deleteUserRep(id: string): Promise<string> {
    try {
      await UserModel.findByIdAndDelete({ _id: id })
      return "User deleted successfully"
    } catch {
      throw new Error(`error deleting user with id ${id} in BD`)
    }
  }
}

export default UserRepository
