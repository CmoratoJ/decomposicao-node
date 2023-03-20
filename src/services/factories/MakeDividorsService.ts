import { InMemoryDivisorsRepository } from '@/repositories/InMemoryDivisorsRepository'
import { CalcDivisorsService } from '../CalcDivisorsService'

export function makeDivisorsService() {
  const divisorsRepository = new InMemoryDivisorsRepository()
  const calcDivisorsService = new CalcDivisorsService(divisorsRepository)

  return calcDivisorsService
}
