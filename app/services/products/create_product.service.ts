import ProductDTO from '../../dto/productDTO.js'
import Product from '../../models/product.js'

// import Product from ""
export default class ProductService {
  private product: typeof Product

  constructor() {
    this.product = Product
  }

  async create(product: ProductDTO) {
    const productExists = await this.product.findBy('name_product', product.name_product)

    if (productExists) {
      return new Error('Product already exists')
    }

    return await this.product.create(product)
  }

  async find(id: number) {
    const product = await this.product.findBy('id', id)

    if (!product) {
      throw new Error('Product not found')
    }

    return product
  }
}
