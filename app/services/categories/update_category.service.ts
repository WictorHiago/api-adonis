import CategoryDTO from '../../dto/categoryDTO.js'
import Category from '../../models/category.js'

// import Category from ""

export default class UpdateCategoryService {
  private category: typeof Category

  constructor() {
    this.category = Category
  }

  public async update(id: number, category: CategoryDTO) {
    const categoryExists = await this.category.findBy('id', id)

    if (!categoryExists) {
      throw new Error('Category not found')
    }

    return await categoryExists.merge(category).save()
  }
}
