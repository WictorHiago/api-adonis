import CategoryDTO from '../../dto/categoryDTO.js'
import Category from '../../models/category.js'

// import Category from ""
export default class CreateCategoryService {
  private category: typeof Category

  constructor() {
    this.category = Category
  }

  public async create(category: CategoryDTO) {
    const categoryExists = await this.category.findBy('name_category', category.name_category)

    if (categoryExists) {
      throw new Error('Category already exists')
    }

    return await this.category.create(category)
  }
}
