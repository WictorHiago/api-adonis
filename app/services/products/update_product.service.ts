import ProductDTO from '../../dto/productDTO.js'
import Product from '../../models/product.js'

export default class UpdateProductService {
  private product: typeof Product

  constructor() {
    this.product = Product
  }

  public async update(id: number, product: ProductDTO) {
    const productExist = await this.product.findBy('id', id)

    if (!productExist) {
      throw new Error('Product not found')
    }

    const updatetedProduct = await productExist.merge(product).save()

    return updatetedProduct
  }
}
