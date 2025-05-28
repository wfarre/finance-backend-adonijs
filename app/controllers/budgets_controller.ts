import Budget from '#models/budget'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class BudgetsController {
  async index({}: HttpContext) {
    const allBudgets = await Budget.all()
    return {
      results: allBudgets,
    }
  }

  async show({ params }: HttpContext) {
    try {
      const budget = await Budget.findByOrFail('id', params.id)
      return { result: budget }
    } catch (err) {
      throw new Exception(err)
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const budgetToDelete = await Budget.findByOrFail('id', params.id)
      await budgetToDelete.delete()
      return response.status(201).send({ message: 'Deleted Successfully' })
    } catch (err) {
      throw new Exception(err)
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const budget = await Budget.findByOrFail('id', params.id)
      await budget.merge(request.body()).save()

      return {
        results: budget,
      }
    } catch (error) {
      if (error.name === 'E_ROW_NOT_FOUND') {
        return response.status(404).send({ message: 'Pot not found.' })
      }
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      await Budget.create(request.body())

      return response.status(200).send({ message: 'Pot created successbully' })
    } catch (err) {
      return response.send(err)
    }
  }
}
