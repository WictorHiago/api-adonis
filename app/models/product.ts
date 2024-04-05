import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Category from '#models/category'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name_product: string

  @column()
  declare description_product: string

  @column()
  declare category_id: number

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @column()
  declare quantity_product: number

  @column()
  declare price_product: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
