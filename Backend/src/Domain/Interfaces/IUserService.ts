export default interface IUserService {
  getUsersServ: <UserModel>() => Promise<UserModel[]>
  getUserByIdServ: <UserModel>(id: string) => Promise<UserModel>
  getUserByEmailServ: <UserModel>(email: string) => Promise<UserModel>
  createUserServ: <UserModel>(user: UserModel) => Promise<UserModel>
  updateUserServ: <UserModel>(id: string, user: UserModel) => Promise<UserModel>
  deleteUserServ: (id: string) => Promise<string>
}
