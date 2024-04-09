import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FindProductService from '#services/products/find_product.service'

@inject()
export default class FindbyidProductsController {
  constructor(private findByIdProductService: FindProductService) {}

  public async findById({ params, response }: HttpContext) {
    const { id } = params
    try {
      const product = await this.findByIdProductService.findById(id)

      return response.status(200).json({ result: product })
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message })
      }
      return response.badRequest(error)
    }
  }
}
