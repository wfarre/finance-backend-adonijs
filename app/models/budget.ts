import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Budget extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare category: string

  @column()
  declare maximum: number

  @column()
  declare theme: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
