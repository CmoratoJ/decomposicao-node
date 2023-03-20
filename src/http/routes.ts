import { FastifyInstance } from 'fastify'
import { calcNumberController } from './controllers/CalcNumberController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/calcNumber', calcNumberController)
}
