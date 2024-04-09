import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FindProductService from '../../services/products/find_product.service.js'

@inject()
export default class FindProductsController {
  constructor(private findProductService: FindProductService) {}

  public async find({ response }: HttpContext) {
    try {
      const products = await this.findProductService.findAll()

      return response.status(200).json({ result: products })
    } catch (error) {
      if (error instanceof Error) {
        return response.badRequest({ error: error.message })
      }
      return response.badRequest(error)
    }
  }
}
