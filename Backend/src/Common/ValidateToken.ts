import type { RequestHandler } from "express"
import jwt from "jsonwebtoken"

export const tokenValidation: RequestHandler = (req, res, next) => {
  const token = req.header("auth-token")
  if (token == null) return res.status(401).json("Access denied")

  const payload = jwt.verify(token, "DonPlayJWT")
  console.log(payload)
  next()
}
