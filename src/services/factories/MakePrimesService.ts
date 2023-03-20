import { InMemoryPrimesRepository } from '@/repositories/InMemoryPrimesRepository'
import { CalcPrimesService } from '../CalcPrimesService'

export function makePrimesService() {
  const primesRepository = new InMemoryPrimesRepository()
  const calcPrimesService = new CalcPrimesService(primesRepository)

  return calcPrimesService
}
