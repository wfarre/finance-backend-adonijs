import { BudgetFactory } from '#database/factories/budget_factory'
import { PotFactory } from '#database/factories/pot_factory'
import { TransactionFactory } from '#database/factories/transaction_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { data } from '#database/data/data'
import { BalanceFactory } from '#database/factories/balance_factory'

export default class extends BaseSeeder {
  static environment: string[] = ['development']
  async run() {
    // Write your database queries inside the run method

    // categories.forEach(async (cat) => await BudgetFactory.create())
    // await BudgetFactory.createMany(5)
    // await PotFactory.createMany(5)
    await this.#createBudgets()
    await this.#createPots()
    await this.#createTransactions()
    await this.#createBalance()
  }
  async #createBudgets() {
    let index = 0
    await BudgetFactory.tap((row, { faker }) => {
      const budget = data.budgets[index]
      row.category = budget.category
      row.theme = budget.theme
      row.maximum = budget.maximum
      index++
    }).createMany(data.budgets.length)
  }

  async #createTransactions() {
    let index = 0
    await TransactionFactory.tap((row, { faker }) => {
      const transaction = data.transactions[index]
      row.name = transaction.name
      // row.avatar = transaction.avatar
      row.category = transaction.category
      row.date = transaction.date
      row.amount = transaction.amount
      row.recurring = transaction.recurring
      index++
    }).createMany(data.transactions.length)
  }

  async #createPots() {
    let index = 0
    await PotFactory.tap((row, { faker }) => {
      const pot = data.pots[index]
      row.name = pot.name
      row.target = pot.target
      row.total = pot.total
      row.theme = pot.theme
      index++
    }).createMany(data.pots.length)
  }

  async #createBalance() {
    await BalanceFactory.tap((row, { faker }) => {
      const balance = data.balance
      row.current = balance.current
      row.expenses = balance.expenses
      row.income = balance.income
    }).create()
  }
}
