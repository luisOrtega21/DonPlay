export default interface IProductRepository {
  getProductsServ: <ProductModel>() => Promise<ProductModel[]>
  getProductByIdServ: <ProductModel>(id: string) => Promise<ProductModel>
  createProductServ: <ProductModel>(
    product: ProductModel
  ) => Promise<ProductModel>
  updateProductServ: <ProductModel>(
    id: string,
    product: ProductModel
  ) => Promise<ProductModel>
  deleteProductServ: (id: string) => Promise<string>
}
