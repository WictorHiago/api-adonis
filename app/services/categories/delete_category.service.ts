import Category from '#models/category'

export default class DeleteCategoryService {
  private category: typeof Category

  constructor() {
    this.category = Category
  }

  public async delete(id: number) {
    const categoryExist = await this.category.findBy('id', id)

    if (!categoryExist) {
      throw new Error('Category not found')
    }

    await categoryExist.delete()

    return 'Category deleted'
  }
}
