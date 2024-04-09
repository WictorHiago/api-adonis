import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FindCategoryService from '#services/categories/find_category.service'

@inject()
export default class FindallCategoriesController {
  constructor(private findCategoryService: FindCategoryService) {}

  public async findAll({ response }: HttpContext) {
    try {
      const categories = await this.findCategoryService.findAll()

      return response.status(200).json({ result: categories })
    } catch (error) {
      console.log(error)
      return response.badRequest({ error: error })
    }
  }
}
