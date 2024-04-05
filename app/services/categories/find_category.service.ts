import Category from '../../models/category.js'

// import Category from ""
export default class FindCategoryService {
  private category: typeof Category

  constructor() {
    this.category = Category
  }

  public async findAll() {
    const categories = await this.category.all()

    return categories
  }

  public async findById(id: number) {
    const category = await this.category.findBy('id', id)

    if (!category) {
      throw new Error('Category not found')
    }

    return category
  }

  public async findByName(name_category: string) {
    const category = await this.category.findBy('name_category', name_category)

    if (!category) {
      throw new Error('Category not found')
    }

    return category
  }
}
