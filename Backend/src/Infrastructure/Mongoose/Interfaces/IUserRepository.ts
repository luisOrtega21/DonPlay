export default interface IUserRepository {
  getUsersRep: <UserModel>() => Promise<UserModel[]>
  getUserByIdRep: <UserModel>(id: string) => Promise<UserModel>
  getUserByEmailRep: <UserModel>(email: string) => Promise<UserModel>
  createUserRep: <UserModel>(user: UserModel) => Promise<UserModel>
  updateUserRep: <UserModel>(id: string, user: UserModel) => Promise<UserModel>
  deleteUserRep: (id: string) => Promise<string>
}
