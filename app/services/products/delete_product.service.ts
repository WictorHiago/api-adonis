import Product from '../../models/product.js'

export default class DeleteProductService {
  private product: typeof Product

  constructor() {
    this.product = Product
  }

  public async delete(id: number) {
    const product = await this.product.findBy('id', id)

    if (!product) {
      throw new Error('Product not found')
    }

    return await product.delete()
  }
}
