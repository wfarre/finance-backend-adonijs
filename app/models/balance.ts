import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Balance extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare current: number

  @column()
  declare income: number

  @column()
  declare expenses: number
}
