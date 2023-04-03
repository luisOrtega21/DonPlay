import type { RequestHandler } from "express"
import ProductService from "../Domain/services/ProductService"

class ProductController {
  productService: ProductService

  constructor() {
    this.productService = new ProductService()
  }

  getProducts: RequestHandler = async (req, res) => {
    const products = await this.productService.getProductsServ()
    res.json(products)
  }

  getProductById: RequestHandler = async (req, res) => {
    const product = await this.productService.getProductByIdServ(req.params.id)
    res.json(product)
  }

  createProduct: RequestHandler = async (req, res) => {
    const productSave = await this.productService.createProductServ(req.body)
    res.json(productSave)
  }

  updateProduct: RequestHandler = async (req, res) => {
    const productUpdated = await this.productService.updateProductServ(
      req.params.id,
      req.body
    )
    res.json(productUpdated)
  }

  deleteProduct: RequestHandler = async (req, res) => {
    const productDelete = await this.productService.deleteProductServ(
      req.params.id
    )

    res.json(productDelete)
  }
}

export default new ProductController()
