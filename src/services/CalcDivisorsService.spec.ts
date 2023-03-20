import { InMemoryDivisorsRepository } from '@/repositories/InMemoryDivisorsRepository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CalcDivisorsService } from './CalcDivisorsService'

let divisorsRepository: InMemoryDivisorsRepository
let sut: CalcDivisorsService

describe('Divisors Service', () => {
  beforeEach(() => {
    divisorsRepository = new InMemoryDivisorsRepository()
    sut = new CalcDivisorsService(divisorsRepository)
  })

  it('should return all divisors from an number', async () => {
    const divisors = await sut.execute({
      number: 45,
    })

    expect(divisors).toEqual([1, 3, 5, 9, 15, 45])
  })
})
