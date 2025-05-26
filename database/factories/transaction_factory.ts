import factory from '@adonisjs/lucid/factories'
import Transaction from '#models/transaction'

export const TransactionFactory = factory
  .define(Transaction, async ({ faker }) => {
    return {
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
      category: 'Education',
      amount: +faker.finance.amount({ min: -100, max: 200, dec: 2 }),
      recurring: true,
    }
  })
  .build()
