import factory from '@adonisjs/lucid/factories'
import Budget from '#models/budget'

export const BudgetFactory = factory
  .define(Budget, async ({ faker }) => {
    return {
      maximum: +faker.commerce.price({ min: 50, max: 200, dec: 2 }),
      theme: 'cyan',
    }
  })
  .build()
