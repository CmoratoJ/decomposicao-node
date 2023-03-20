import { FastifyInstance } from 'fastify'
import { calcNumberController } from './controllers/calcNumberController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/calcNumber', calcNumberController)
}
