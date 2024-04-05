/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ProductsController from '../app/controllers/products/create_product_controller.js'
import UpdateProductsController from '../app/controllers/products/update_product_controller.js'
import FindProductsController from '../app/controllers/products/findall_product_controller.js'
import FindbyidProductsController from '#controllers/products/findbyid_product_controller'
import FindByNameProductsController from '#controllers/products/findbyname_product_controller'
import DeleteProductController from '#controllers/products/delete_product_controller'

router.get('/', async () => {
  return {
    hello: 'welcome',
  }
})

router.post('/product/add', [ProductsController, 'create'])

router
  .group(() => {
    router.get('/find/products', [FindProductsController, 'find'])
    router.get('/find/:id', [FindbyidProductsController, 'findById'])
    router.get('/find/name/:name_product', [FindByNameProductsController, 'findByName'])
    router.put('/update/:id', [UpdateProductsController, 'update'])
    router.delete('/delete/:id', [DeleteProductController, 'delete'])
  })
  .prefix('/product')
