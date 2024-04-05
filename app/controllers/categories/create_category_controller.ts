import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import CreateCategoryService from '#services/categories/create_category.service'

@inject()
export default class CreateCategoriesController {
  constructor(private createCategoryService: CreateCategoryService) {}

  public async create({ request, response }: HttpContext) {
    const { name_category, description_category } = request.body()

    try {
      if (!name_category || !description_category) {
        return response.status(400).json({
          error: 'Missing required fields',
        })
      }

      const category = await this.createCategoryService.create({
        name_category,
        description_category,
      })

      if (category instanceof Error) {
        return response.status(400).json({
          error: category.message,
        })
      }

      return response.status(201).json({ created: category })
    } catch (error) {
      return response.badRequest(error)
    }
  }
}
