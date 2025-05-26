import factory from '@adonisjs/lucid/factories'
import Pot from '#models/pot'

export const PotFactory = factory
  .define(Pot, async ({ faker }) => {
    return {
      name: faker.commerce.product(),
      target: +faker.commerce.price({ min: 100, max: 2000 }),
      total: +faker.commerce.price({ min: 10, max: 200 }),
      theme: 'green',
    }
  })
  .build()
