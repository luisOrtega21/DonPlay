export default interface IProductRepository {
  getProductsRep: <ProductModel>() => Promise<ProductModel[]>
  getProductByIdRep: <ProductModel>(id: string) => Promise<ProductModel>
  createProductRep: <ProductModel>(
    product: ProductModel
  ) => Promise<ProductModel>
  updateProductRep: <ProductModel>(
    id: string,
    product: ProductModel
  ) => Promise<ProductModel>
  deleteProductRep: (id: string) => Promise<string>
}
