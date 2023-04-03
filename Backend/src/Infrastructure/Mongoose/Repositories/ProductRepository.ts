import ProductModel from "../../../Infrastructure/Mongoose/Models/Product"
import type IProductRepository from "../Interfaces/IProductRepository"

class ProductRepository implements IProductRepository {
  async getProductsRep<ProductModel>(): Promise<ProductModel[]> {
    try {
      const products = await ProductModel.find()
      return products as ProductModel[]
    } catch {
      throw new Error("error getting DB products")
    }
  }

  async getProductByIdRep<ProductModel>(id: string): Promise<ProductModel> {
    try {
      const product = await ProductModel.findById({ _id: id })
      return product as ProductModel
    } catch {
      throw new Error(`error getting product with id ${id}`)
    }
  }

  async createProductRep<ProductModel>(
    product: ProductModel
  ): Promise<ProductModel> {
    try {
      const productSave = new ProductModel(product)
      await productSave.save()
      return productSave as ProductModel
    } catch {
      throw new Error("error saving product in DB")
    }
  }

  async updateProductRep<ProductModel>(
    id: string,
    product: ProductModel
  ): Promise<ProductModel> {
    try {
      const productUpdate = new ProductModel(product)
      await ProductModel.findByIdAndUpdate({ _id: id }, productUpdate, {
        new: true,
      })
      return productUpdate as ProductModel
    } catch {
      throw new Error(`error updating product with id ${id} in BD`)
    }
  }

  async deleteProductRep(id: string): Promise<string> {
    try {
      await ProductModel.findByIdAndDelete({ _id: id })
      return "User deleted successfully"
    } catch {
      throw new Error(`error deleting product with id ${id} in BD`)
    }
  }
}

export default ProductRepository
