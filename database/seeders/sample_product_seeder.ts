import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '../../app/models/product.js'

export default class SampleProductSeeder extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Product.createMany([
      {
        name_product: 'Coca-cola',
        description_product: 'Coca-cola',
        quantity_product: 5,
        price_product: 10.0,
      },
      {
        name_product: 'Fanta',
        description_product: 'Fanta',
        quantity_product: 5,
        price_product: 9.9,
      },
    ])
  }
}
