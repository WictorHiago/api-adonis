import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FindCategoryService from '#services/categories/find_category.service'

@inject()
export default class FindbyidCategoryController {
  constructor(private findCategoryService: FindCategoryService) {}

  public async findById({ params, response }: HttpContext) {
    const { id } = params
    try {
      const category = await this.findCategoryService.findById(id)

      return response.status(200).json({ result: category })
    } catch (error) {
      if (error instanceof Error) {
        return response.badRequest({ error: error.message })
      }
      return response.badRequest(error)
    }
  }
}
