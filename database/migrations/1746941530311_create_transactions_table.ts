import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('avatar').notNullable()
      table.string('name').notNullable()
      table.timestamp('date')
      table.string('category').notNullable()
      table.float('amount').notNullable().defaultTo(0)
      table.boolean('recurring').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
