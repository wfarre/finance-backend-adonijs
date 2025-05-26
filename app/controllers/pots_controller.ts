import Pot from '#models/pot'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'

export default class PotsController {
  async index({}: HttpContext) {
    const allPots = await Pot.all()
    return { results: allPots }
  }

  async show({ params, request, response }: HttpContext) {
    try {
      const pot = await Pot.findByOrFail('id', params.id)

      return {
        results: pot,
      }
    } catch (error) {
      if (error.name === 'E_ROW_NOT_FOUND') {
        return response.status(404).send({ message: 'Pot not found.' })
      }
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      const pot = await Pot.create(request.body())

      return response.status(200).send({ message: 'Pot created successbully' })
    } catch (err) {
      return response.send(err)
    }
  }

  async destroy({ request, response, params }: HttpContext) {
    try {
      const potToDelete = await Pot.findByOrFail('id', params.id)
      await potToDelete.delete()
      return response.status(201).send({ message: 'Deleted Successfully' })
    } catch (err) {
      throw new Exception(err)
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const pot = await Pot.findByOrFail('id', params.id)
      await pot.merge(request.body()).save()

      return {
        results: pot,
      }
    } catch (error) {
      if (error.name === 'E_ROW_NOT_FOUND') {
        return response.status(404).send({ message: 'Pot not found.' })
      }
    }
  }
}
