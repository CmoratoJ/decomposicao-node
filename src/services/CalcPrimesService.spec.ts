import { InMemoryPrimesRepository } from '@/repositories/InMemoryPrimesRepository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CalcPrimesService } from './CalcPrimesService'

let primesRepository: InMemoryPrimesRepository
let sut: CalcPrimesService

describe('Primes Service', () => {
  beforeEach(() => {
    primesRepository = new InMemoryPrimesRepository()
    sut = new CalcPrimesService(primesRepository)
  })

  it('should return all prime numbers from an number', async () => {
    const primes = await sut.execute({
      divisors: [1, 3, 5, 9, 15, 45],
    })

    expect(primes).toEqual([3, 5])
  })
})
