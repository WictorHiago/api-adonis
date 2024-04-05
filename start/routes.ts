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
import FindallCategoriesController from '#controllers/categories/findall_category_controller'
import FindbyidCategoryController from '#controllers/categories/findbyid_category_controller'
import FindbynameCategoryController from '#controllers/categories/findbyname_category_controller'
import CreateCategoriesController from '#controllers/categories/create_category_controller'
import DeleteCategoryController from '#controllers/categories/delete_category_controller'
import UpdateCategoryController from '#controllers/categories/update_category_controller'

router.get('/', async () => {
  return {
    hello: 'welcome',
  }
})

router.group(() => {
  /* Group PRODUCTS routes */
  router
    .group(() => {
      router.post('/save', [ProductsController, 'create'])
      router.get('/find/products', [FindProductsController, 'find'])
      router.get('/find/:id', [FindbyidProductsController, 'findById'])
      router.get('/find/name/:name_product', [FindByNameProductsController, 'findByName'])
      router.put('/update/:id', [UpdateProductsController, 'update'])
      router.delete('/delete/:id', [DeleteProductController, 'delete'])
    })
    .prefix('/product')

  /* Group CATEGORIES routes */
  router
    .group(() => {
      router.post('/save', [CreateCategoriesController, 'create'])
      router.get('/find/categories', [FindallCategoriesController, 'findAll'])
      router.get('/find/:id', [FindbyidCategoryController, 'findById'])
      router.get('/find/name/:name_category', [FindbynameCategoryController, 'findByName'])
      router.put('/update/:id', [UpdateCategoryController, 'update'])
      router.delete('/delete/:id', [DeleteCategoryController, 'delete'])
    })
    .prefix('/category')
})
