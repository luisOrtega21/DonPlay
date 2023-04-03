import type IProductService from "../Interfaces/IProductService"
import ProductRepository from "../../Infrastructure/Mongoose/Repositories/ProductRepository"

class ProductService implements IProductService {
  productRepo: ProductRepository
  constructor() {
    this.productRepo = new ProductRepository()
  }

  async getProductsServ<ProductModel>(): Promise<ProductModel[]> {
    try {
      const products = await this.productRepo.getProductsRep()
      return products as ProductModel[]
    } catch {
      throw new Error("Error in GetProductsService")
    }
  }

  async getProductByIdServ<ProductModel>(id: string): Promise<ProductModel> {
    try {
      if (id === null || id === "")
        throw new Error("The Product-ID is required")
      const product = await this.productRepo.getProductByIdRep(id)
      return product as ProductModel
    } catch {
      throw new Error("Error in GetProductByIdService")
    }
  }

  async createProductServ<ProductModel>(
    product: ProductModel
  ): Promise<ProductModel> {
    try {
      if (product === null) throw new Error("The Product is required")

      const productSave = await this.productRepo.createProductRep(product)
      return productSave as ProductModel
    } catch {
      throw new Error("Error in CreateProductService")
    }
  }

  async updateProductServ<ProductModel>(
    id: string,
    product: ProductModel
  ): Promise<ProductModel> {
    try {
      if (id === null || id === "")
        throw new Error("The product-ID is required")
      if (product === null) throw new Error("The product is required")
      const productUpdate = await this.productRepo.updateProductRep(id, product)
      return productUpdate as ProductModel
    } catch {
      throw new Error("Error in UpdateProductService")
    }
  }

  async deleteProductServ(id: string): Promise<string> {
    try {
      if (id === null || id === "")
        throw new Error("The Product-ID is required")
      const productDelete = await this.productRepo.deleteProductRep(id)
      return productDelete
    } catch {
      throw new Error("Error in DeleteProductService")
    }
  }
}

export default ProductService
