import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import DeleteProductService from '#services/products/delete_product.service'

@inject()
export default class DeleteProductController {
  constructor(private deleteProductService: DeleteProductService) {}

  public async delete({ params, response }: HttpContext) {
    const { id } = params

    try {
      await this.deleteProductService.delete(id)
      return response.status(200).json({ result: 'Product deleted' })
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
