import Product from '../../models/product.js'

export default class FindProductService {
  private product: typeof Product

  constructor() {
    this.product = Product
  }

  public async findAll() {
    const products = await this.product.all()

    return products
  }

  public async findById(id: number) {
    const product = await this.product.findBy('id', id)

    if (!product) {
      throw new Error('Product not found')
    }

    return product
  }

  public async findByName(name_product: string) {
    const product = await this.product.findBy('name_product', name_product)

    if (!product) {
      throw new Error('Product not found')
    }

    return product
  }

  public async findByCategory(id: number) {
    const product = await this.product.findBy('category_id', id)

    if (!product) {
      throw new Error('Product not found')
    }

    return product
  }
}
