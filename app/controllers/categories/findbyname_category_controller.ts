import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import FindCategoryService from '#services/categories/find_category.service'

@inject()
export default class FindbynameCategoryController {
  constructor(private findCategoryService: FindCategoryService) {}

  public async findByName({ params, response }: HttpContext) {
    const { name_category } = params

    try {
      const category = await this.findCategoryService.findByName(name_category)

      return response.status(200).json({ result: category })
    } catch (error) {
      if (error instanceof Error) {
        return response.badRequest({ error: error.message })
      }
      return response.badRequest(error)
    }
  }
}
