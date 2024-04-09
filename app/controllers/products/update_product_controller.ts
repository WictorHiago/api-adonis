import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import UpdateProductService from '../../services/products/update_product.service.js'

@inject()
export default class UpdateProductsController {
  constructor(private updateProductService: UpdateProductService) {}

  public async update({ params, request, response }: HttpContext) {
    const { id } = params
    const { name_product, description_product, category_id, quantity_product, price_product } =
      request.body()

    try {
      if (!id || !category_id) {
        return response.badRequest('Missing required fields')
      }

      const product = await this.updateProductService.update(id, {
        name_product,
        description_product,
        category_id,
        quantity_product,
        price_product,
      })

      return response.status(201).json({ updated: product })
    } catch (error) {
      if (error instanceof Error) {
        return response.badRequest({ error: error.message })
      }
      return response.badRequest(error)
    }
  }
}
