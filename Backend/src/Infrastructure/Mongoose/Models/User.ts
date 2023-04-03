import { Schema, model } from "mongoose"
import bcrypt from "bcrypt"

export interface IUser {
  name: string
  lastName: string
  email: string
  password: string
  encryptPassword: (password: string) => Promise<string>
  validatePassword: (password: string, pswHash: string) => Promise<boolean>
}

const UserSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    lastName: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true, unique: true },
    password: { type: String, require: true, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

UserSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

UserSchema.methods.validatePassword = async function (
  password: string,
  pswHash: string
): Promise<boolean> {
  if (password === "" || password === null) {
    return false
  }
  return await bcrypt.compare(password, pswHash)
}

export default model<IUser>("User", UserSchema)
