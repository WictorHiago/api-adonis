import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FindProductService from '#services/products/find_product.service'

@inject()
export default class FindByNameProductsController {
  constructor(private findProductService: FindProductService) {}

  public async findByName({ params, response }: HttpContext) {
    const { name_product } = params
    console.log(name_product)

    try {
      const product = await this.findProductService.findByName(name_product)

      if (!product) {
        return response.status(404).json({ message: 'Product not found' })
      }

      return response.status(200).json({ result: product })
    } catch (error) {
      return response.badRequest(error)
    }
  }
}
