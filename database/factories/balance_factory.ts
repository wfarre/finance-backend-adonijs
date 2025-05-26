import factory from '@adonisjs/lucid/factories'
import Balance from '#models/balance'

export const BalanceFactory = factory
  .define(Balance, async ({ faker }) => {
    return {
      current: 0,
      expenses: 0,
      income: 0,
    }
  })
  .build()
