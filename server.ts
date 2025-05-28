import 'reflect-metadata'
import { Ignitor } from '@adonisjs/core'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

let server: any

async function setupServer() {
  if (!server) {
    const filename = fileURLToPath(import.meta.url)
    const dirName = dirname(filename)
    const dirNameUrl = new URL(dirName)
    const ignitor = new Ignitor(dirNameUrl)

    const app = await ignitor.httpServer()
    await app.start()
    server = app
  }
}

export default async function handler(req: any, res: any) {
  await setupServer()
  return server.handle(req, res)
}
