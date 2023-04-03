import dotenv from "dotenv"
import app from "./app"
import "./Infrastructure/Mongoose/DBConnection"

dotenv.config()
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(app.get("port"), () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`server port ${app.get("port")}`)
})

// jump();
