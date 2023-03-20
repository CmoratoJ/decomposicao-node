export class InMemoryPrimesRepository {
  public primes: number[] = []

  async create(data: number) {
    this.primes.push(data)
  }

  async findAllPrimes() {
    return this.primes
  }
}
