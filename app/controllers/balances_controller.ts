import Balance from '#models/balance'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class BalancesController {
  async index({}: HttpContext) {
    try {
      const balance = await Balance.all()
      console.log(balance)

      return { results: balance }
    } catch (err) {
      throw new Exception(err)
    }
  }

  async update({ request, params }: HttpContext) {
    try {
      const balance = await Balance.findByOrFail('id', params.id)
      balance.merge(request.body()).save()
      return { message: 'balance successfully updated' }
    } catch (err) {
      throw new Exception(err)
    }
  }
}
