import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'balances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.float('current')
      table.float('income')
      table.float('expenses')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
