import express from "express"
import userRoutes from "./Infrastructure/Express/Routes/UserRoutes"
import productRoutes from "./Infrastructure/Express/Routes/ProductRoutes"
import morgan from "morgan"
import cors from "cors"

const app = express()

app.use(express.json())
app.set("port", 9000)
app.use(morgan("dev"))
app.use(userRoutes)
app.use(productRoutes)
app.use(cors())
app.use(express.urlencoded({ extended: false }))

export default app
