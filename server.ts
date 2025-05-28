import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core/build/standalone'
import { HttpServer } from '@adonisjs/http-server'
import { VercelRequest, VercelResponse } from '@vercel/node'

let server: HttpServer

async function setupServer() {
  if (!server) {
    const ignitor = new Ignitor(__dirname)
    const app = await ignitor.httpServer()
    await app.start()
    server = app
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await setupServer()
  return server.handle(req, res)
}
