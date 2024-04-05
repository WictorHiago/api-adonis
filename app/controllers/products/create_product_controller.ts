import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import ProductService from '../../services/products/create_product.service.js'

@inject()
export default class ProductsController {
  constructor(private productService: ProductService) {}

  async create({ request, response }: HttpContext) {
    const { name_product, description_product, category_id, quantity_product, price_product } =
      request.body()

    try {
      if (
        !name_product ||
        !description_product ||
        !category_id ||
        !quantity_product ||
        !price_product
      ) {
        return response.badRequest('Missing required fields')
      }
      const product = await this.productService.create({
        name_product,
        description_product,
        quantity_product,
        category_id,
        price_product,
      })

      if (product instanceof Error) {
        return response.status(400).json({
          error: product.message,
        })
      }

      return response.status(201).json({ created: product })
    } catch (error) {
      console.log(error)
      return response.badRequest(error)
    }
  }
}
