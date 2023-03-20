import { DivisorsRepository } from '@/repositories/interfaces/DivisorsRepository'

interface CalcDivisorsServiceRequest {
  number: number
}

export class CalcDivisorsService {
  constructor(private divisorsRepository: DivisorsRepository) {}

  async execute({ number }: CalcDivisorsServiceRequest) {
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        await this.divisorsRepository.create(i)
      }
    }

    return await this.divisorsRepository.findAllDivisors()
  }
}
