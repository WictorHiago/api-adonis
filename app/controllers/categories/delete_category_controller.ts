import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import DeleteCategoryService from '#services/categories/delete_category.service'

@inject()
export default class DeleteCategoryController {
  constructor(private deleteCategoryService: DeleteCategoryService) {}

  public async delete({ params, response }: HttpContext) {
    const { id } = params
    try {
      await this.deleteCategoryService.delete(id)

      return response.status(200).json({ result: 'Category deleted' })
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
