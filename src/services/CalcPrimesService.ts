import { PrimesRepository } from '@/repositories/interfaces/PrimesRepository'

interface CalcPrimesServiceRequest {
  divisors: number[]
}

export class CalcPrimesService {
  constructor(private primesRepository: PrimesRepository) {}

  async execute({ divisors }: CalcPrimesServiceRequest) {
    for (let i = 0; i < divisors.length; i++) {
      let isPrime: boolean = true
      for (let j = 2; j < divisors[i]; j++) {
        if (divisors[i] % j === 0) {
          isPrime = false
          break
        }
      }
      if (isPrime && divisors[i] !== 1) {
        await this.primesRepository.create(divisors[i])
      }
    }

    return await this.primesRepository.findAllPrimes()
  }
}
