import ProductController from "../../../Controllers/ProductController"
import { Router } from "express"

const router = Router()

router.get("/product", ProductController.getProducts)
router.get("/product/:id", ProductController.getProductById)
router.post("/product", ProductController.createProduct)
router.put("/product/:id", ProductController.updateProduct)
router.delete("/product/:id", ProductController.deleteProduct)

export default router
