import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FindCategoryService from '#services/categories/find_category.service'

@inject()
export default class FindbyidCategoriesController {
  constructor(private findCategoryService: FindCategoryService) {}

  public async findById({ params, response }: HttpContext) {
    const { id } = params
    try {
      const category = await this.findCategoryService.findById(id)
      return response.status(200).json({ result: category })
    } catch (error) {
      console.log(error)
      return response.badRequest(error)
    }
  }
}
